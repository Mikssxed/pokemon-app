import ActionBar from "./components/ActionBar";
import styles from "./Battle.module.css";
import MyArea from "./components/MyArea";
import Enemy from "./components/Enemy";

const Battle = () => {
  return (
    <div className={styles.battlePage}>
      <div className={styles.fightContainer}>
        <Enemy />
        <MyArea />
      </div>
      <ActionBar />
    </div>
  );
};

export default Battle;
