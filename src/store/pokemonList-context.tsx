import { createContext } from "react";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonTeam {
    name: string;
    url: string;
    id: number
  }

interface PokemonListContext {
  selectedPokemons: {}[];
  addPokemon: () => void;
  loadPokemon: () => void;
  pokemonList: Pokemon[];
  isActive: string | null;
  getNumberFromUrl: (url: string) => string;
  selectPokemon: (string: string) => void;
  isSelected: boolean;
}

const PokemonListContext = createContext<PokemonListContext>({
  selectedPokemons: [{}],
  addPokemon: () => {},
  loadPokemon: () => {},
  pokemonList: [],
  isActive: null,
  getNumberFromUrl: (url) => "",
  selectPokemon: (string) => {},
  isSelected: false,
});

export default PokemonListContext;
