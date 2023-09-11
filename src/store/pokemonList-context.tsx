import { createContext } from "react";
import {
  Moves,
  Pokemon,
  PokemonData,
  PokemonTeam,
  selectedPokemon,
} from "../utils/types/types";

interface PokemonListContext {
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
  editPokemon: (id: number) => void;
  // loadMoves: (name: string) => void;
  moves: Moves[];
  selectedMove: string;
  selectMove: (name: string) => void;
  addMove: (number: number | undefined) => void;
  removeMove: (name: string) => void;
}

const PokemonListContext = createContext<PokemonListContext>({
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
    moves: [],
    sprites: { back_default: "", front_default: "" },
  },
  pokemonTeam: Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: "",
    url: "",
    pokeId: 0,
    selected: false,
    moves: [],
    selectedMoves: ["", "", "", ""],
    sprites: { back_default: "", front_default: "" },
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      spAttack: 0,
      spDefense: 0,
      speed: 0,
    },
    active: index === 0 ? true : false,
  })),
  editPokemon: (id) => {},
  // loadMoves: (name) => {},
  moves: [
    {
      type: "",
      name: "",
      accuracy: 100,
      damage_class: "",
      power: 100,
      pp: 15,
      priority: 0,
      effect_entries: [
        {
          effect: "",
          language: { name: "" },
          short_effect: "",
        },
      ],
    },
  ],
  selectedMove: "",
  selectMove: (name) => {},
  addMove: (number) => {},
  removeMove: (name) => {},
});

export default PokemonListContext;
