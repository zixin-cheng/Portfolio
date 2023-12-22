import { useEffect } from 'react';
import styles from '../ProjectPages/ProjectPage.module.css';

export default function Filter({ filter, setActive, active, setFilter }) {
  useEffect(() => {
    if (active === 0) {
      setFilter(filter);
      return;
    }
    const filtered = filter.filter((project) => project.category.includes(active));
    setFilter(filtered);
  }, [active]);

  return (
    <div className={styles.filter_wrapper}>
      <button className={active === 0 ? 'active' : ''} onClick={() => setActive(0)}>
        All
      </button>
      <button className={active === 'UI/UX' ? 'active' : ''} onClick={() => setActive('UI/UX')}>
        UI/UX
      </button>
      <button className={active === 'Branding' ? 'active' : ''} onClick={() => setActive('Branding')}>
        Branding
      </button>
      <button className={active === 'Creative Dev' ? 'active' : ''} onClick={() => setActive('Creative Dev')}>
        Creative Dev
      </button>
      <button className={active === 'Motion Design' ? 'active' : ''} onClick={() => setActive('Motion Design')}>
        Motion Design
      </button>
    </div>
  );
}
