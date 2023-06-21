import Moves from "./components/Moves";
import PokemonEdit from "./components/PokemonEdit";
import Team from "../../components/Team";
import classes from "./ManageTeam.module.css";

const ManageTeam = () => {
  return (
    <div className={classes.teamContainer}>
      <Team selecting={false} />
      <Moves />
      <PokemonEdit />
    </div>
  );
};

export default ManageTeam;
