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
  selected: boolean;
  moves: { move: { name: string; url: string } }[];
  selectedMoves: string[];
  sprites: { back_default: string; front_default: string };
}
export interface PokemonData {
  name: string;
  id: number;
  types: string[];
  description: string;
  stats: PokemonStats;
  moves: { move: { name: string; url: string } }[];
  sprites: { back_default: string; front_default: string };
}
export interface PokemonDataAPI {
  name: string;
  id: number;
  types: { type: { name: string } }[];
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  stats: { base_stat: number }[];
  moves: { move: { name: string; url: string } }[];
  sprites: { back_default: string; front_default: string };
}
export interface selectedPokemon {
  name: string | null;
  pokeId: number;
}
export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
}

export interface MovesData {
  type: { name: string };
  name: string;
  accuracy: number;
  damage_class: { name: string };
  power: number;
  pp: number;
  priority: 0;
  effect_entries:
    | {
        effect: string;
        language: { name: string };
        short_effect: string;
      }[]
    | [];
}
export interface Moves {
  type: string;
  name: string;
  accuracy: number;
  damage_class: string;
  power: number;
  pp: number;
  priority: 0;
  effect_entries:
    | {
        effect: string;
        language: { name: string };
        short_effect: string;
      }[]
    | [];
}
