import { useProgress } from '@react-three/drei';
import { useEffect } from 'react';
import styles from '../LandingPage.module.css';

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  return (
    <div className={started ? styles.loading_screen_0 : styles.loading_screen_100}>
      <div className={styles.loading_text}>
        <div
          className={styles.loading_progress}
          style={{
            width: `${progress}%`,
          }}
        >
          LOADING
        </div>
        <div className={styles.loading_background_text}>LOADING</div>
      </div>
    </div>
  );
};
