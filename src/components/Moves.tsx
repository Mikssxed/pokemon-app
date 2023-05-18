import { useContext, useEffect, useState } from "react";
import PokemonListContext from "../store/pokemonList-context";
import Loading from "./Loading";
import Move from "./Move";
import classes from "./Moves.module.css";

const Moves = () => {
  const { pokemonData, isActive, pokemonTeam, selectMove } =
    useContext(PokemonListContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [isActive]);

  const pokemonMoves = pokemonTeam
    .find((p) => p.name === isActive)
    ?.moves.map((i, index) => {
      return (
        <Move
          key={`move${index}`}
          moveName={i.move.name}
          selectMove={() => selectMove(i.move.name)}
        />
      );
    });

  return (
    <div className={classes.container}>
      {!pokemonMoves && <p>Please select pokemon</p>}
      {loading ? <Loading /> : pokemonMoves}
    </div>
  );
};

export default Moves;
