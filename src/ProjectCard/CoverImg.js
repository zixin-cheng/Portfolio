import React from 'react';
import styles from './ProjectCard.module.css';

function startPreview(video, timeStart = 0, timeEnd) {
  video.muted = true;
  video.currentTime = timeStart;
  video.playbackRate = 1;
  video.play();

  video.addEventListener('timeupdate', function () {
    if (video.currentTime >= timeStart && (timeEnd === undefined || video.currentTime < timeEnd)) {
      return;
    }
    video.currentTime = timeStart;
  });

  video.play();
}

export default function CoverImg(props) {
  const videoRef = React.useRef(null);

  const isVideo = props.imgSrc.match(/\.(mp4|webm|mov|ogg)$/i);

  React.useEffect(() => {
    if (isVideo && props.isHovering && videoRef.current) {
      startPreview(videoRef.current, props.timeStart, props.timeEnd);
    }
  }, [props.isHovering]);

  if (!isVideo) {
    // Render image instead of video
    return (
      <img
        src={props.imgSrc}
        className={props.isHovering ? styles.cover_img : styles.hidden_cover_img}
        style={{
          left: props.position[0] + 200,
          top: props.position[1],
          position: 'fixed',
        }}
      />
    );
  }

  // If it's a video, render video
  return (
    <video
      src={props.imgSrc}
      className={props.isHovering ? styles.cover_img : styles.hidden_cover_img}
      style={{
        left: props.position[0] + 200,
        top: props.position[1],
        position: 'fixed',
      }}
      ref={videoRef}
      loop
      playsInline
      muted
    />
  );
}
