import React, { useState, useEffect } from 'react';
import styles from '../ProjectPages/ProjectPage.module.css';

import { Link } from 'react-router-dom';

export default function ArchiveCard(props) {
  const [isHovering, setIsHovering] = useState(false);
  const project = props.project;
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
        style={{ width: '100%' }}
      >
        <div style={{ overflow: 'hidden', height: '50vh' }}>
          <img src={project.imgSrc} alt="" />
        </div>
        <h1 style={isHovering ? { color: 'var(--c-magenta)' } : { color: 'var(--c-dark-grey)' }}>{project.title}</h1>

        {/* <h1 style={{isHovering ? styles.cover_img : styles.hidden_cover_img}}>{project.title}</h1> */}
      </Link>
    </div>
  );
}
