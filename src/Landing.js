import styles from './LandingPage.module.css';

export default function Landing(props) {
  return (
    <div className={styles.intro_wrapper} id="intro">
      <div className={styles.intro_header}>Hello. I’m Jane.</div>
      <div className={styles.intro_paragraph}>I’m a Creative Technologist based in New York.</div>
    </div>
  );
}
