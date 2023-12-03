import React, { useState } from 'react'
import styles from './ProjectCard.module.css'

export default function Card (props) {
    return <div 
    className={styles.card}
    >
        {props.children}
    </div>
}