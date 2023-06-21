import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import classes from "./PokemonList.module.css";
import SearchPokemon from "./SearchPokemon";
import PokemonListContext from "../../../store/pokemonList-context";

const PokemonList: FC = () => {
  const [searchPokemon, setSearchPokemon] = useState<string>("");
  const {
    pokemonList,
    isActive,
    loadPokemon,
    getNumberFromUrl,
    selectPokemon,
    isSelected,
    addPokemon,
  } = useContext(PokemonListContext);

  useEffect(() => {
    loadPokemon();
  }, []);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchPokemon((e.target as HTMLInputElement).value);
  };

  const filteredList = pokemonList.filter((i) =>
    i.name.includes(searchPokemon)
  );

  const listToFilter = searchPokemon ? filteredList : pokemonList;

  const fullList = listToFilter.map((pokemon, index) => (
    <li
      onClick={() => {
        selectPokemon({
          name: pokemon.name,
          pokeId: +getNumberFromUrl(pokemon.url),
        });
      }}
      className={
        isActive === pokemon.name
          ? `${classes.listItem} ${classes.selected}`
          : classes.listItem
      }
      key={index}
    >
      <img
        loading="lazy"
        className={classes.pokemonImg}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getNumberFromUrl(
          pokemon.url
        )}.png`}
        alt={pokemon.name}
      />
      <p className={classes.pokemonName}>{pokemon.name}</p>
    </li>
  ));

  return (
    <div className={classes.section}>
      <SearchPokemon input={searchPokemon} onChange={inputChangeHandler} />
      <ul className={classes.container}>{fullList}</ul>
      <button
        onClick={addPokemon}
        disabled={!isSelected}
        className={classes.addButton}
      >
        Add Pokemon
      </button>
    </div>
  );
};

export default PokemonList;
