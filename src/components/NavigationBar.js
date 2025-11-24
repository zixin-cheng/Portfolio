import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import styles from '../LandingPage.module.css';

export default function Projects(props) {
  const location = useLocation();

  return (
    <div className={styles.navigationbar_wrapper}>
      <HashLink to="/#top" smooth>
        <div className={styles.menu_text}>Jane Cheng</div>
      </HashLink>

      <div className={styles.menu_wrapper}>
        <HashLink to="/archive" smooth>
          <div
            className={styles.menu_text}
            style={{
              textDecoration: location.pathname === '/archive' ? 'underline' : 'none',
            }}
          >
            Projects
          </div>
        </HashLink>

        <Link
          to={'https://www.notion.so/janecheng/Jane-Cheng-s-Dev-Blog-67e529b49f4845659aff5880ecbe1db8'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.menu_text}>Dev Blog</div>
        </Link>

        <Link to={'/info-page'}>
          <div
            className={styles.menu_text}
            style={{
              textDecoration: location.pathname === '/info-page' ? 'underline' : 'none',
            }}
          >
            Info
          </div>
        </Link>
      </div>
    </div>
  );
}
