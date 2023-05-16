import { useContext } from "react";
import PokemonListContext from "../store/pokemonList-context";
import Move from "./Move";
import classes from "./Moves.module.css";

const Moves = () => {
  const { pokemonData, isActive, pokemonTeam } = useContext(PokemonListContext);
  const pokemonMoves = pokemonTeam
    .find((p) => p.name === isActive)
    ?.moves.map((i, index) => {
      return <Move key={`move${index}`} moveName={i.move.name} />;
    });

  return <div className={classes.container}>{pokemonMoves}</div>;
};

export default Moves;
