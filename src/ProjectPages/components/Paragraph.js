import styles from '../ProjectPage.module.css';

export default function Paragraph(props) {
  const { header, content } = props;
  return (
    <div className={styles.paragraph_wrapper}>
      <div className={styles.h1}>{header}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
      {/* <div className={styles.p}>{content}</div> */}
    </div>
  );
}
