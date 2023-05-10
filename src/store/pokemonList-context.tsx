import { createContext } from "react";
import {
  Pokemon,
  PokemonData,
  PokemonTeam,
  selectedPokemon,
} from "../utils/types/types";

interface PokemonListContext {
  selectedPokemons: PokemonTeam[];
  addPokemon: () => void;
  loadPokemon: () => void;
  pokemonList: Pokemon[];
  isActive: string | null;
  getNumberFromUrl: (url: string) => string;
  selectPokemon: ({}: selectedPokemon) => void;
  isSelected: boolean;
  removePokemon: ({}: selectedPokemon) => void;
  pokemonData: PokemonData;
  pokemonTeam: PokemonTeam[];
}

const PokemonListContext = createContext<PokemonListContext>({
  selectedPokemons: [{ name: "", url: "", id: 0, pokeId: 0 }],
  addPokemon: () => {},
  loadPokemon: () => {},
  pokemonList: [],
  isActive: null,
  getNumberFromUrl: (url) => "",
  selectPokemon: ({ name, pokeId }) => {},
  isSelected: false,
  removePokemon: ({ name, pokeId }) => {},
  pokemonData: {
    name: "",
    id: 0,
    types: [],
    description: "",
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      spAttack: 0,
      spDefense: 0,
      speed: 0,
    },
  },
  pokemonTeam: [
    { id: 1, name: "", url: "", pokeId: 0 },
    { id: 2, name: "", url: "", pokeId: 0 },
    { id: 3, name: "", url: "", pokeId: 0 },
    { id: 4, name: "", url: "", pokeId: 0 },
    { id: 5, name: "", url: "", pokeId: 0 },
    { id: 6, name: "", url: "", pokeId: 0 },
  ],
});

export default PokemonListContext;
