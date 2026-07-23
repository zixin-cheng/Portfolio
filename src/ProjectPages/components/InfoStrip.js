import styles from '../ProjectPage.module.css';

export default function InfoStrip(props) {
  const { roles, teams, deliverables, tools } = props;
  return (
    <div className={styles.info_wrapper}>
      {roles?.length > 0 && (
        <div className={styles.info_column}>
          <p>
            <b>ROLE</b>
          </p>
          <ul>
            {roles.map((i, index) => (
              <li key={index}>
                <p>{i}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tools?.length > 0 && (
        <div className={styles.info_column}>
          <p>
            <b>TOOLS</b>
          </p>
          <ul>
            {tools.map((i, index) => (
              <li key={index}>
                <p>{i}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {teams?.length > 0 && (
        <div className={styles.info_column}>
          <p>
            <b>TEAM</b>
          </p>
          <ul>
            {teams.map((i, index) => (
              <li key={index}>
                <p>{i}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {deliverables?.length > 0 && (
        <div className={styles.info_column}>
          <p>
            <b>CONTENT</b>
          </p>
          <ul>
            {deliverables.map((i, index) => (
              <li key={index}>
                <p>{i}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
