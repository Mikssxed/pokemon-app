import { FC, ReactNode, useState } from "react";
import PokemonListContext from "./pokemonList-context";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}
interface PokemonTeam {
  name: string | null;
  url?: string;
  id: number;
}

const PokemonListProvider: FC<{ children: ReactNode }> = (props) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isActive, setIsActive] = useState<string | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonTeam[]>([
    { id: 1, name: "", url: "" },
    { id: 2, name: "", url: "" },
    { id: 3, name: "", url: "" },
    { id: 4, name: "", url: "" },
    { id: 5, name: "", url: "" },
    { id: 6, name: "", url: "" },
  ]);

  const loadPokemonHandler = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species?limit=905")
      .then((res) => {
        setPokemonList(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
      });
  };

  const getNumberFromUrl = (url: string) => {
    const numberUrl = url.split("/")[6];
    return numberUrl;
  };

  const selectPokemon = (string: string) => {
    setIsSelected(true);
    setIsActive(string);
  };

  const addPokemonHandler = () => {
    const index = selectedPokemon.findIndex((p) => !p.name);
    if (index !== -1) {
      const updatedTeam = [...selectedPokemon];
      updatedTeam[index] = {
        id: updatedTeam[index].id,
        name: isActive,
      };
      setSelectedPokemon(updatedTeam);
    } else {
      console.log("Team is full");
    }
  };

  console.log(selectedPokemon);

  const pokemonContext = {
    selectedPokemons: [{}],
    addPokemon: addPokemonHandler,
    loadPokemon: loadPokemonHandler,
    pokemonList: pokemonList,
    isActive: isActive,
    getNumberFromUrl: getNumberFromUrl,
    selectPokemon: selectPokemon,
    isSelected: isSelected,
  };

  return (
    <PokemonListContext.Provider value={pokemonContext}>
      {props.children}
    </PokemonListContext.Provider>
  );
};

export default PokemonListProvider;
