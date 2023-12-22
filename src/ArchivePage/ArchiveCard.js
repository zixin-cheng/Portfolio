import React, { useState, useEffect } from 'react';
import styles from '../ProjectPages/ProjectPage.module.css';

import { Link } from 'react-router-dom';

export default function ArchiveCard(props) {
  const project = props.project;
  return (
    <div className={styles.project_wrapper}>
      <Link
        to={project.pgSrc}
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
          });
        }}
      >
        <img src={project.imgSrc} alt="" />
        {/* <div className={styles.footer_nav_text}>{project.title}</div> */}
        <h1>{project.title}</h1>
      </Link>
    </div>
  );
}
