import { FC } from "react";

import classes from "./PokemonType.module.css";

const PokemonType: FC<{ children: string }> = ({ children }) => {
  return <div className={classes.type}>{children}</div>;
};

export default PokemonType;
