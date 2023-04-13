import { ChangeEvent, FC, useEffect, useState } from "react";
import axios from "axios";
import classes from "./PokemonList.module.css";
import SearchPokemon from "./SearchPokemon";

interface Pokemon {
  name: string;
  url: string;
}

const PokemonList: FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchPokemon, setSearchPokemon] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species?limit=905")
      .then((res) => {
        setPokemonList(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
      });
  }, []);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchPokemon((e.target as HTMLInputElement).value);
  };

  const getNumberFromUrl = (url: string) => {
    const numberUrl = url.split("/")[6];
    return numberUrl;
  };

  const filteredList = pokemonList.filter((i) =>
    i.name.includes(searchPokemon)
  );

  const listToFilter = searchPokemon ? filteredList : pokemonList;

  const fullList = listToFilter.map((pokemon, index) => (
    <li className={classes.listItem} key={index}>
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
    </div>
  );
};

export default PokemonList;
