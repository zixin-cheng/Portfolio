import { PROJECT_LIST_ARCHIVE } from './project-data-archive';
import styles from '../ProjectPages/ProjectPage.module.css';
import { useState, useEffect } from 'react';
import ArchiveCard from './ArchiveCard';
import Filter from './Filter';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

export default function ArchivePage(props) {
  // const projectItems = [...new Set(PROJECT_LIST_ARCHIVE.map((val) => val.category))];
  const [filter, setFilter] = useState(PROJECT_LIST_ARCHIVE);
  const [active, setActive] = useState(0);
  useEffect(() => {
    document.title = 'Projects — Jane Cheng';
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className={styles.content_wrapper}>
        <h1>PROJECTS</h1>
        <Filter filter={PROJECT_LIST_ARCHIVE} setFilter={setFilter} active={active} setActive={setActive} />

        <div className={styles.projects_wrapper}>
          {filter.map((project, index) => (
            <ArchiveCard project={project} key={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
