import { FC } from "react";

import classes from "./PokemonType.module.css";

const PokemonType: FC<{ type: string }> = ({ type }) => {
  return (
    <div className={`${classes.type} ${classes[type.toLowerCase()]}`}>
      {type.toUpperCase()}
    </div>
  );
};

export default PokemonType;
