import { useContext } from "react";
import pokeball from "../assets/white-pokeball.png";

import classes from "./Team.module.css";
import TeamTile from "./TeamTile";
import PokemonListContext from "../store/pokemonList-context";

const Team = () => {
  const { selectedPokemons, removePokemon } = useContext(PokemonListContext);

  const pokemonTeam = selectedPokemons.map((pokemon, index) => (
    <TeamTile
      onClick={() =>
        removePokemon({ name: pokemon.name, pokeId: pokemon.pokeId })
      }
      pokemonData={pokemon}
      key={index}
    />
  ));

  return (
    <div>
      <div className={classes.header}>
        <img className={classes.pokeballImg} src={pokeball} />
        <h2 className={classes.headerText}>Current Party</h2>
      </div>
      <div className={classes.teamTileContainer}>{pokemonTeam}</div>
    </div>
  );
};

export default Team;
