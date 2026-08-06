import { useEffect } from 'react';

export default function useEqualizeImgstripHeights(selector = '.imgstrip_wrapper', enabled = true) {
  useEffect(() => {
    if (!enabled) return; // don't bother running while content isn't mounted

    let rafId = 0;
    const GAP = 20;
    const MIN_H = 80;

    const getRatio = (m) =>
      m.tagName === 'IMG' ? (m.naturalWidth || 1) / (m.naturalHeight || 1) : (m.videoWidth || 1) / (m.videoHeight || 1);

    const waitForMedia = (el) =>
      new Promise((resolve) => {
        if (el.tagName === 'IMG') {
          if (el.complete && el.naturalWidth) return resolve();
          el.addEventListener('load', resolve, { once: true });
          el.addEventListener('error', resolve, { once: true });
        } else if (el.tagName === 'VIDEO') {
          if (el.readyState >= 1 && el.videoWidth) return resolve();
          el.addEventListener('loadedmetadata', resolve, { once: true });
          el.addEventListener('error', resolve, { once: true });
        } else resolve();
      });

    const equalize = async () => {
      const strips = Array.from(document.querySelectorAll(selector));
      for (const strip of strips) {
        const media = Array.from(strip.querySelectorAll('img, video'));
        if (!media.length) continue;
        await Promise.all(media.map(waitForMedia));

        const ratios = media.map(getRatio);
        const totalRatio = ratios.reduce((a, b) => a + b, 0);
        const availableWidth = strip.clientWidth - GAP * (media.length - 1);

        const rowHeight = Math.max(MIN_H, availableWidth / totalRatio);

        media.forEach((m, i) => {
          m.style.height = `${rowHeight}px`;
          m.style.width = `${rowHeight * ratios[i]}px`;
          m.style.display = 'block';
          m.style.flexShrink = '0';
        });
      }
    };

    const schedule = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(equalize);
    };

    schedule();

    const ro = new ResizeObserver(schedule);
    document.querySelectorAll(selector).forEach((strip) => ro.observe(strip));

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [selector, enabled]); // <-- re-run when `enabled` flips true
}
