import styles from "./ActionBar.module.css";

const ActionBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}></div>
      <div className={styles.actions}></div>
    </div>
  );
};

export default ActionBar;
