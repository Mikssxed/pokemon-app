import { FC } from "react";
import classes from "./SearchPokemon.module.css";
import { AttributesType } from "../utils/types/types";

const SearchPokemon: FC<AttributesType> = ({
  input,
  onChange,
}: AttributesType) => {
  return (
    <input
      placeholder="Search pokemon by name"
      className={classes.searchPoke}
      name="pokemonName"
      onChange={onChange}
      value={input}
    />
  );
};

export default SearchPokemon;
