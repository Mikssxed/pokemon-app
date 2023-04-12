import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./PokemonList.module.css";

interface Pokemon {
  name: string;
  url: string;
}

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

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

  return (
    <div>
      <ul className={classes.container}>
        {pokemonList.map((pokemon, index) => (
          <li className={classes.listItem} key={index}>
            <img
              loading="lazy"
              className={classes.pokemonImg}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={pokemon.name}
            />
            <p className={classes.pokemonName}>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
