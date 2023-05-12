import { useContext } from "react";
import PokemonListContext from "../store/pokemonList-context";
import Move from "./Move";
import classes from "./Moves.module.css";

const Moves = () => {
  const { pokemonData, isActive, pokemonTeam } = useContext(PokemonListContext);

  const pokemonMoves = pokemonTeam
    .find((p) => p.name === isActive)
    ?.moves.map((i, index) => <Move key={`move${index}`} move={i.move.name} />);
  console.log(pokemonTeam);

  return <div className={classes.container}>{pokemonMoves}</div>;
};

export default Moves;
