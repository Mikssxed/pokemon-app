import ActionBar from "./components/ActionBar";
import styles from "./Battle.module.css";
import MyArea from "./components/MyArea";

const Battle = () => {
  return (
    <div className={styles.battlePage}>
      <div className={styles.fightContainer}>
        <MyArea />
      </div>
      <ActionBar />
    </div>
  );
};

export default Battle;
