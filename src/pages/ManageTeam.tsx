import Moves from "../components/Moves";
import Team from "../components/Team";
import classes from "./ManageTeam.module.css";

const ManageTeam = () => {
  return (
    <div className={classes.teamContainer}>
      <Team selecting={false} />
      <Moves />
    </div>
  );
};

export default ManageTeam;
