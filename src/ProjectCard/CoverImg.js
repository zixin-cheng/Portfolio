import React from 'react';
import styles from './ProjectCard.module.css';

export default function CoverImg(props) {
  return (
    <img
      src={props.imgSrc}
      alt="cover image"
      className={props.isHovering ? styles.cover_img : styles.hidden_cover_img}
      style={{ left: props.position[0] + 200, top: props.position[1] }}
    />
  );
}
