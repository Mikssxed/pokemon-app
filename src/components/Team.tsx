import { useContext } from "react";
import pokeball from "../assets/white-pokeball.png";

import classes from "./Team.module.css";
import TeamTile from "./TeamTile";
import PokemonListContext from "../store/pokemonList-context";

const Team = ({ selecting = true }) => {
  const { pokemonTeam, removePokemon, selectPokemon, editPokemon } =
    useContext(PokemonListContext);

  const team = pokemonTeam.map((pokemon, index) => (
    <TeamTile
      onClick={() => {
        if (selecting) {
          removePokemon({ name: pokemon.name, pokeId: pokemon.pokeId });
          editPokemon(index);
        } else {
          selectPokemon({ name: pokemon.name, pokeId: pokemon.pokeId });
          editPokemon(index);
        }
      }}
      active={pokemon.selected}
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
      <div className={classes.teamTileContainer}>{team}</div>
    </div>
  );
};

export default Team;
