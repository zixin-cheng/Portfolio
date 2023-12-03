import styles from '../ProjectPage.module.css';

export default function Image(props) {
  const { imgSrc, orientation, caption } = props;
  return (
    <div className={styles[`image_wrapper_${orientation}`]}>
      <img src={imgSrc} alt={caption}></img>
      <caption>{caption}</caption>
    </div>
  );
}
