import { FC, useContext } from "react";
import PokemonListContext from "../store/pokemonList-context";
import classes from "./Move.module.css";

const Move: FC<{
  moveName: string;
  selectMove?: () => void;
  selected?: boolean;
}> = ({ moveName, selectMove, selected }) => {
  const { moves, selectedMove } = useContext(PokemonListContext);
  const type = moves.find((i) => i.name === moveName)?.type;

  return (
    <div
      onClick={selectMove}
      className={`${classes.type} ${type && classes[type.toLowerCase()]} ${
        selectedMove === moveName && selectMove && classes.selected
      } ${selected && classes.selected}`}
    >
      {moveName}
    </div>
  );
};

export default Move;
