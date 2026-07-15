import { useEffect } from 'react';

// Hook: equalize media heights inside each matching container
export default function useEqualizeImgstripHeights(selector = '.imgstrip_wrapper') {
  useEffect(() => {
    let raf = 0;

    const waitForMedia = (el) =>
      new Promise((resolve) => {
        if (!el) return resolve();
        if (el.tagName === 'IMG') {
          if (el.complete && el.naturalWidth) return resolve();
          el.addEventListener('load', () => resolve(), { once: true });
        } else if (el.tagName === 'VIDEO') {
          if (el.readyState >= 1 && el.videoWidth) return resolve();
          el.addEventListener('loadedmetadata', () => resolve(), { once: true });
        } else resolve();
      });

    const equalize = async () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(async () => {
        const strips = Array.from(document.querySelectorAll(selector));
        for (const strip of strips) {
          const media = Array.from(strip.querySelectorAll('img, video'));
          await Promise.all(media.map((m) => waitForMedia(m)));

          if (media.length === 0) {
            strip.style.height = '';
            continue;
          }

          // Compute heights each media would have at its current column width
          const computedHeights = media.map((m) => {
            const rect = m.getBoundingClientRect();
            const availableWidth = rect.width || m.clientWidth || 0;
            let ratio = 1;
            if (m.tagName === 'IMG') {
              ratio = (m.naturalWidth || 1) / (m.naturalHeight || 1);
            } else if (m.tagName === 'VIDEO') {
              ratio = (m.videoWidth || rect.width || 1) / (m.videoHeight || rect.height || 1);
            }
            return Math.max(1, Math.round(availableWidth / (ratio || 1)));
          });

          // For "no-crop" mode pick the MIN computed height so all media can
          // scale to that height without cropping. Clamp to reasonable bounds.
          const rawTargetH = Math.min(...computedHeights);
          const MIN_HEIGHT = 80; // px minimum for very small media
          const MAX_HEIGHT = Math.max(600, Math.round(window.innerHeight * 0.6)); // px cap based on viewport
          const targetH = Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, rawTargetH));

          // Apply target height to strip and media
          strip.style.height = `${targetH}px`;
          strip.style.minHeight = `${targetH}px`;

          media.forEach((m) => {
            // Make media fill the column width while preserving aspect ratio
            // and matching the computed uniform height (no crop).
            m.style.width = '100%';
            m.style.height = `${targetH}px`;
            m.style.objectFit = 'contain';
            m.style.display = 'block';
            m.style.maxWidth = '100%';
          });
        }
      });
    };

    equalize();

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(equalize, 120);
    };
    window.addEventListener('resize', onResize);

    const observer = new MutationObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(equalize, 60);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
    };
  }, [selector]);
}
