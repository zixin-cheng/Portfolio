import styles from '../ProjectPage.module.css';
import { Link } from 'react-router-dom';

export default function FooterNav(props) {
  const { prev, prevSrc, next, nextSrc } = props;
  return (
    <div className={styles.footer_nav_wrapper}>
      <Link
        to={prevSrc}
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
          });
        }}
      >
        <div className={styles.footer_nav_text}>{`< ${prev}`}</div>
      </Link>

      <Link
        to={nextSrc}
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
          });
        }}
      >
        <div className={styles.footer_nav_text}>{`${next} >`}</div>
      </Link>
    </div>
  );
}
