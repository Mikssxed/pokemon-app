import PokemonInfo from "./components/PokemonInfo";
import PokemonList from "./components/PokemonList";
import Team from "../../components/Team";

import classes from "./CreateTeam.module.css";

const CreateTeam = () => {
  return (
    <div className={classes.createTeamContainer}>
      <Team />
      <PokemonList />
      <PokemonInfo />
    </div>
  );
};

export default CreateTeam;
