import { useEffect, useState, useRef } from 'react';

import Navigationbar from './components/NavigationBar';
import Footer from './components/Footer';

import styles from './ProjectPages/ProjectPage.module.css';

const MIN_COLUMN_WIDTH = 320;
const COLUMN_GAP = 32;
const BATCH_SIZE = 4;
const getItemKey = (item) => item.public_id ?? item.asset_id ?? item.url;

function MediaItem({ item, onLoaded }) {
  const videoRef = useRef(null);
  const itemKey = item.public_id ?? item.asset_id ?? item.url;

  const aspectRatio = item.width && item.height ? item.width / item.height : 4 / 3;

  const handleVideoReady = () => {
    onLoaded(itemKey);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div style={{ aspectRatio, marginBottom: COLUMN_GAP, borderRadius: 8, overflow: 'hidden' }}>
      {item.resource_type === 'video' ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoReady}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.url}
          alt=""
          onLoad={() => onLoaded(itemKey)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )}
    </div>
  );
}

export default function Playground() {
  const [items, setItems] = useState([]);
  const [committedCount, setCommittedCount] = useState(0); // fully loaded, shown in grid
  const [targetCount, setTargetCount] = useState(BATCH_SIZE); // how many we're trying to load
  const [loadedIds, setLoadedIds] = useState(() => new Set());
  const [columnCount, setColumnCount] = useState(1);
  const containerRef = useRef(null);
  const sentinelRef = useRef(null);

  useEffect(() => {
    document.title = 'Playground — Jane Cheng';

    fetch('/.netlify/functions/cloudinary-folder')
      .then((res) => res.json())
      .then((data) => setItems(data.resources || []));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateColumnCount = () => {
      const width = container.offsetWidth;
      const count = Math.max(1, Math.floor((width + COLUMN_GAP) / (MIN_COLUMN_WIDTH + COLUMN_GAP)));
      setColumnCount(count);
    };

    updateColumnCount();
    const observer = new ResizeObserver(updateColumnCount);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleItemLoaded = (id) => {
    setLoadedIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  // Once every item in the current pending batch has fired its load event,
  // commit the whole batch to the visible grid in one go.
  useEffect(() => {
    if (items.length === 0) return;
    const pending = items.slice(committedCount, targetCount);
    if (pending.length === 0) return;
    const allLoaded = pending.every((item) => loadedIds.has(getItemKey(item)));
    if (allLoaded) {
      setCommittedCount(targetCount);
    }
  }, [loadedIds, items, committedCount, targetCount]);

  // Only advance to the next batch once the current one has finished.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && committedCount === targetCount && targetCount < items.length) {
          setTargetCount((prev) => Math.min(prev + BATCH_SIZE, items.length));
        }
      },
      { rootMargin: '600px' },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [committedCount, targetCount, items.length]);

  const visibleItems = items.slice(0, committedCount); // shown in the grid
  const pendingItems = items.slice(committedCount, targetCount); // loading off-screen
  const isLoadingBatch = pendingItems.length > 0;
  const hasMore = targetCount < items.length;

  const columns = Array.from({ length: columnCount }, () => []);
  visibleItems.forEach((item, i) => {
    columns[i % columnCount].push(item);
  });

  return (
    <div>
      <Navigationbar />
      <div className={`${styles.content_wrapper} ${styles.top}`}>
        <main
          ref={containerRef}
          style={{
            maxWidth: '100%',
            paddingLeft: '20px',
            paddingRight: '20px',
            margin: '0 auto',
            display: 'flex',
            gap: COLUMN_GAP,
          }}
        >
          {columns.map((column, colIndex) => (
            <div key={colIndex} style={{ flex: '1 1 0', minWidth: 0 }}>
              {column.map((item) => (
                <MediaItem key={getItemKey(item)} item={item} onLoaded={handleItemLoaded} />
              ))}
            </div>
          ))}
        </main>

        {/* Batch loading off-screen — triggers downloads without showing anything */}
        {isLoadingBatch && (
          <div
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              overflow: 'hidden',
              opacity: 0,
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          >
            {pendingItems.map((item) => (
              <MediaItem key={getItemKey(item)} item={item} onLoaded={handleItemLoaded} />
            ))}
          </div>
        )}

        {isLoadingBatch && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '32px 0',
              fontSize: 14,
              opacity: 0.6,
              animation: 'fadeBlink 1.4s ease-in-out infinite',
            }}
          >
            Loading…
          </div>
        )}

        <style>{`
  @keyframes fadeBlink {
    0%, 100% { opacity: 0.15; }
    50% { opacity: 0.6; }
  }
`}</style>

        {hasMore && !isLoadingBatch && (
          <div ref={sentinelRef} style={{ height: 1, width: '100%' }} aria-hidden="true" />
        )}
      </div>

      <Footer />
    </div>
  );
}
