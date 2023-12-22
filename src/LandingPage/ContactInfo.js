import styles from '../LandingPage.module.css';

export default function ContactInfo(props) {
  return (
    <div className={styles.contact_wrapper} id="contact">
      <div className={styles.contact_header}>Let's get in touch!</div>
      <a href="mailto:janecheng1026@gmail.com">
        <button className={styles.contact_button}>Contact Me</button>
      </a>
    </div>
  );
}
