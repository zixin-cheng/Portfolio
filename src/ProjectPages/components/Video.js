import styles from '../ProjectPage.module.css';

export default function Video(props) {
  const { videoSrc, orientation, caption, autoplay, muted, loop, controls } = props;
  return (
    <div className={styles.video_wrapper}>
      {/* <div className={styles[`video_wrapper_${orientation}`]}> */}
      <video src={videoSrc} autoPlay={autoplay} muted={muted} loop={loop} controls={controls} playsInline></video>{' '}
      {/* <caption>{caption}</caption> */}
    </div>
  );
}
