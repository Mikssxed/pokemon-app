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
}
