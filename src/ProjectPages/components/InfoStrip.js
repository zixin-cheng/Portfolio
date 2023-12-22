import styles from '../ProjectPage.module.css';

export default function InfoStrip(props) {
  const { roles, teams, deliverables, duration } = props;
  return (
    <div className={styles.info_wrapper}>
      <div className={styles.info_column}>
        <h1>My Role</h1>
        <ul>
          {roles.map((i, index) => (
            <li key={index}>
              <p>{i}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.info_column}>
        <h1>Team Members</h1>
        <ul>
          {teams.map((i, index) => (
            <li key={index}>
              <p>{i}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.info_column}>
        <h1>Deliverables</h1>
        <ul>
          {deliverables.map((i, index) => (
            <li key={index}>
              <p>{i}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className={styles.info_column}>
        <h1>Duration</h1>
        <p>{duration}</p>
      </div> */}
    </div>
  );
}
