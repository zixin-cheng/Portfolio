import { Link } from 'react-router-dom';
import styles from '../LandingPage.module.css';

export default function Projects(props) {
  return (
    <div className={styles.footer_wrapper}>
      <Link to={'https://www.instagram.com/zx.design'} target="_blank" rel="noopener noreferrer">
        <div className={styles.footer_text}>Instagram</div>
      </Link>

      <Link to={'https://www.linkedin.com/in/zi-xin-jane-cheng-63b513128/'} target="_blank" rel="noopener noreferrer">
        <div className={styles.footer_text}>Linkedin</div>
      </Link>

      <Link to={'mailto:janecheng1026@gmail.com'}>
        <div className={styles.footer_text}>Email</div>
      </Link>
    </div>
  );
}
