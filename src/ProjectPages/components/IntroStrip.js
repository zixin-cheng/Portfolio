import styles from '../ProjectPage.module.css';

export default function IntroStrip(props) {
  const { tags, title, description } = props;
  return (
    <div className={styles.intro_wrapper}>
      <div className={styles.tags}>{`/ ${tags}`}</div>
      <div className={styles.project_title}>{title}</div>
      <div className={styles.p}>{description}</div>
    </div>
  );
}
