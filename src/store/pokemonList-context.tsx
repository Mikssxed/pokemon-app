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
  pokemonData: { name: "", id: 0, types: [], description: "" },
});

export default PokemonListContext;
