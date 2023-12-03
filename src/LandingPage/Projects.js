import ProjectCard from '../ProjectCard';
import { PROJECT_LIST } from '../ProjectCard/project-data';

import styles from '../LandingPage.module.css';

export default function Projects(props) {
  return (
    <div className={styles.projects_wrapper} id="projects">
      {PROJECT_LIST.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
}
