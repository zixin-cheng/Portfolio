import styles from '../ProjectPage.module.css';

export default function ImageHero(props) {
  const { imgSrc } = props;
  return (
    <div className={styles.imgHero}>
      <img src={imgSrc} alt=""></img>
    </div>
  );
}
