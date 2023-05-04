import { createContext } from "react";
import { Pokemon, PokemonTeam } from "../utils/types/types";

interface PokemonListContext {
  selectedPokemons: PokemonTeam[];
  addPokemon: () => void;
  loadPokemon: () => void;
  pokemonList: Pokemon[];
  isActive: string | null;
  getNumberFromUrl: (url: string) => string;
  selectPokemon: (string: string | null) => void;
  isSelected: boolean;
  removePokemon: (string: string | null) => void;
  // loadPokemonData: (pokemon: string) => void;
}

const PokemonListContext = createContext<PokemonListContext>({
  selectedPokemons: [{ name: "", url: "", id: 0 }],
  addPokemon: () => {},
  loadPokemon: () => {},
  pokemonList: [],
  isActive: null,
  getNumberFromUrl: (url) => "",
  selectPokemon: (string) => {},
  isSelected: false,
  removePokemon: (string) => {},
  // loadPokemonData: (pokomon: string) => {},
});

export default PokemonListContext;
