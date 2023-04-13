import { ChangeEvent, FC } from "react";
import classes from "./SearchPokemon.module.css";

interface AttributesType {
  input: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

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
