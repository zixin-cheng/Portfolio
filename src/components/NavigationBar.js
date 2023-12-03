import { HashLink } from 'react-router-hash-link';
import styles from '../LandingPage.module.css';

export default function Projects(props) {
  return (
    <div className={styles.navigationbar_wrapper}>
      <HashLink to="/#intro" smooth>
        <div className={styles.menu_text}>Jane Cheng</div>
      </HashLink>
      <div className={styles.menu_wrapper}>
        <HashLink to="/#projects" smooth>
          <div className={styles.menu_text}>Projects</div>
        </HashLink>
        <HashLink to="/#contact" smooth>
          <div className={styles.menu_text}>Contact</div>
        </HashLink>
      </div>
    </div>
  );
}
