import React, { useState, useEffect } from 'react';
import styles from '../ProjectPages/ProjectPage.module.css';

import { Link } from 'react-router-dom';

function startPreview(video, timeStart, timeEnd) {
  video.muted = true;
  // const currentTime = timeMap['default'] || 0; // If 'default' key doesn't exist, default to 0
  // video.currentTime = timeMap;
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

export default function ArchiveCard(props) {
  const [isHovering, setIsHovering] = useState(false);
  const project = props.project;
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (isHovering && videoRef.current) {
      startPreview(videoRef.current, project.timeStart, project.timeEnd);
    }
  }, [isHovering]);

  return (
    <div
      className={styles.project_wrapper}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        to={project.pgSrc}
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
          });
        }}
        style={{ width: '100%', height: 'auto' }}
      >
        <div className={styles.project_wrapper_image}>
          <img src={project.imgSrc} alt="" />
          {project.vidSrc && (
            <video
              ref={videoRef}
              src={project.vidSrc}
              autoPlay
              muted
              className={styles.overlay_video}
              loop
              playsInline
            ></video>
          )}
        </div>
        <h1 style={isHovering ? { color: 'var(--c-magenta)' } : { color: 'var(--c-dark-grey)' }}>{project.title}</h1>
      </Link>
    </div>
  );
}
