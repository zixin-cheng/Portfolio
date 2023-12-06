import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import styles from '../LandingPage.module.css';

export default function Projects(props) {
  return (
    <div className={styles.navigationbar_wrapper}>
      <HashLink to="/#top" smooth>
        <div className={styles.menu_text}>Jane Cheng</div>
      </HashLink>
      <div className={styles.menu_wrapper}>
        <HashLink to="/#projects" smooth>
          <div className={styles.menu_text}>Projects</div>
        </HashLink>

        <Link to={'/info-page'}>
          <div className={styles.menu_text}>Info</div>
        </Link>
        {/* <HashLink to="/#contact" smooth>
          <div className={styles.menu_text}>Contact</div>
        </HashLink> */}
      </div>
    </div>
  );
}
