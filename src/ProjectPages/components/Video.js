import styles from '../ProjectPage.module.css';

export default function Video(props) {
  const { videoSrc, orientation, caption } = props;
  return (
    <div className={styles[`video_wrapper_${orientation}`]}>
      <video controls src={videoSrc}></video>
      <caption>{caption}</caption>
    </div>
  );
}
