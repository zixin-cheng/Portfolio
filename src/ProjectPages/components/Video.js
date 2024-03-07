import styles from '../ProjectPage.module.css';

export default function Video(props) {
  const { videoSrc, orientation, caption, autoplay, muted, loop } = props;
  return (
    <div className={styles[`video_wrapper_${orientation}`]}>
      <video controls src={videoSrc} autoplay={autoplay} muted={muted} loop={loop} playsInline></video>
      <caption>{caption}</caption>
    </div>
  );
}
