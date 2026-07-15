import styles from '../ProjectPage.module.css';

export default function InlineVideo(props) {
  const { videoSrc, orientation, caption, autoplay, muted, loop, controls } = props;
  return (
    <div className={styles.video_wrapper_inline}>
      <video src={videoSrc} autoPlay={autoplay} muted={muted} loop={loop} controls={controls} playsInline></video>
      {/* <caption>{caption}</caption> */}
    </div>
  );
}
