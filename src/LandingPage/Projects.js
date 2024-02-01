import ProjectCard from '../ProjectCard';
import { PROJECT_LIST } from '../ProjectCard/project-data';
import { Link } from 'react-router-dom';

import styles from '../LandingPage.module.css';

export default function Projects(props) {
  return (
    <>
      <div className={styles.projects_wrapper} id="projects">
        {PROJECT_LIST.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
        <div className={styles.card}>
          <Link
            to={'/archive'}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
              });
            }}
          >
            <div className={styles.caption}>{'VIEW ALL >>'}</div>
          </Link>
          <Link
            to={'https://www.notion.so/janecheng/Jane-Cheng-s-Dev-Blog-67e529b49f4845659aff5880ecbe1db8'}
            target="_blank"
            rel="noopener noreferrer"
          ></Link>
        </div>
      </div>
    </>
  );
}
