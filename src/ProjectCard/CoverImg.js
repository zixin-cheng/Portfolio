import React from 'react';
import styles from './ProjectCard.module.css';

function startPreview(video, timeStart, timeEnd) {
  video.muted = true;
  video.currentTime = timeStart;
  video.playbackRate = 1;
  video.play();

  video.addEventListener('timeupdate', function () {
    // Check if the video playback time is within any loop interval
    if (video.currentTime >= timeStart && (timeEnd === undefined || video.currentTime < timeEnd)) {
      // If the video playback time is within the current interval, do nothing
      return;
    }

    // If the video playback time is outside all loop intervals, seek it back to the start of the first interval
    video.currentTime = timeStart;
  });

  video.play();
}

export default function CoverImg(props) {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (props.isHovering && videoRef.current) {
      startPreview(videoRef.current, props.timeStart, props.timeEnd);
    }
  }, [props.isHovering]);

  return (
    <>
      <video
        src={props.imgSrc}
        autoPlay={props.isHovering ? true : false}
        className={props.isHovering ? styles.cover_img : styles.hidden_cover_img}
        style={{ left: props.position[0] + 200, top: props.position[1] }}
        ref={videoRef}
      ></video>
    </>
  );
}
