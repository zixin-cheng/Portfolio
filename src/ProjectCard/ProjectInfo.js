import styles from './ProjectCard.module.css'

export default function ProjectInfo(props) {
  const {title, description} = props
  return (
    <div className={styles.project_info}>
      <div className={styles.project_title}>{title}</div>
      <p>{description}</p>
    </div>
  )
}