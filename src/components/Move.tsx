import { FC, useContext } from "react";
import PokemonListContext from "../store/pokemonList-context";
import classes from "./Move.module.css";

const Move: FC<{ moveName: string; selectMove?: () => void }> = ({
  moveName,
  selectMove,
}) => {
  const { moves } = useContext(PokemonListContext);
  const type = moves.find((i) => i.name === moveName)?.type;

  return (
    <div
      onClick={selectMove}
      className={`${classes.type} ${type && classes[type.toLowerCase()]}`}
    >
      {moveName}
    </div>
  );
};

export default Move;
