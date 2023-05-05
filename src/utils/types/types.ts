import { ChangeEvent } from "react";

export interface AttributesType {
  input: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonTeam {
  name: string | null;
  url: string;
  id: number;
  pokeId: number;
}
export interface PokemonData {
  name: string;
  id: number;
  types: string[];
  description: string;
}
export interface PokemonDataAPI {
  name: string;
  id: number;
  types: { type: { name: string } }[];
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
}
export interface selectedPokemon {
  name: string | null;
  pokeId: number;
}
