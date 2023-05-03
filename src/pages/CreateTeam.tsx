import PokemonInfo from "../components/PokemonInfo";
import PokemonList from "../components/PokemonList";
import Team from "../components/Team";
import PokemonListProvider from "../store/PokemonListProvider";

import classes from "./CreateTeam.module.css";

const CreateTeam = () => {
  return (
    <PokemonListProvider>
      <div className={classes.createTeamContainer}>
        <Team />
        <PokemonList />
        <PokemonInfo />
      </div>
    </PokemonListProvider>
  );
};

export default CreateTeam;
