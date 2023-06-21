import {
  Moves,
  Pokemon,
  PokemonData,
  PokemonTeam,
  selectedPokemon,
} from "../utils/types/types";

export interface manageState {
  isSelected: boolean;
  selectedPokemon: selectedPokemon;
  pokemonList: Pokemon[];
  pokemonTeam: PokemonTeam[];
  pokemonData: PokemonData;
  firstClick: boolean;
  moves: Moves[];
  selectedMove: string;
}

type Load = {
  type: "LOAD";
  payload: Pokemon[];
};

type Add = {
  type: "ADD" | "EDIT" | "ADD_MOVE";
  payload: number;
};

type Select = {
  type: "SELECT" | "FIRST";
  payload: boolean;
};

type Set = {
  type: "SET";
  payload: selectedPokemon;
};

type Remove = {
  type: "REMOVE";
  payload: number;
};

type Data = {
  type: "DATA";
  payload: PokemonData;
};

type Move = {
  type: "MOVES";
  payload: Moves;
};

type Reset_Move = {
  type: "RESET_MOVE";
};

type Select_Move = {
  type: "SELECT_MOVE" | "REMOVE_MOVE";
  payload: string;
};

export type manageAction =
  | Select
  | Set
  | Load
  | Add
  | Remove
  | Data
  | Move
  | Reset_Move
  | Select_Move;
