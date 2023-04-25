import { FC, ReactNode, useReducer, useState } from "react";
import PokemonListContext from "./pokemonList-context";
import axios from "axios";
import { Pokemon, PokemonTeam } from "../utils/types/types";

enum manageActionType {
  SELECT = "SELECT",
}

interface manageState {
  isSelected: boolean;
  // isActive: string | null;
  // selectedPokemon: PokemonTeam[];
}

interface manageAction {
  type: manageActionType;
  isSelected: boolean;
}

const managePokemonReducer = (state: manageState, action: manageAction) => {
  switch (action.type) {
    case manageActionType.SELECT:
      return {
        ...state,
        isSelected: action.isSelected,
      };
    default:
      throw new Error("should not appear");
  }
};

const PokemonListProvider: FC<{ children: ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(managePokemonReducer, {
    isSelected: false,
  });
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
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

  const selectPokemon = (string: string | null) => {
    dispatch({ type: manageActionType.SELECT, isSelected: true });
    setIsActive(string);
  };

  const addPokemonHandler = () => {
    const index = selectedPokemon.findIndex((p) => !p.name);
    if (index !== -1) {
      const updatedTeam = [...selectedPokemon];
      updatedTeam[index] = {
        id: updatedTeam[index].id,
        name: isActive,
        url: pokemonList.find((p) => p.name === isActive)!.url,
      };

      setPokemonList(pokemonList.filter((p) => p.name !== isActive));

      setSelectedPokemon(updatedTeam);
      dispatch({ type: manageActionType.SELECT, isSelected: false });
    } else {
      console.log("Team is full");
    }
  };

  const sortPokemonList = (list: Pokemon[]) => {
    return list.sort(
      (prev, now) => +getNumberFromUrl(prev.url) - +getNumberFromUrl(now.url)
    );
  };

  const removePokemonHandler = (string: string | null) => {
    selectPokemon(string);

    const removedPokemon = selectedPokemon.findIndex((p) => p.name === string);
    const removedPokemonData = selectedPokemon.find((p) => p.name === string);
    const updatedTeam = [...selectedPokemon];
    updatedTeam[removedPokemon] = {
      id: updatedTeam[removedPokemon].id,
      name: "",
      url: "",
    };

    setPokemonList(
      sortPokemonList([
        ...pokemonList,
        {
          name: removedPokemonData!.name,
          url: removedPokemonData!.url,
        } as Pokemon,
      ])
    );

    setSelectedPokemon(updatedTeam);
  };

  const pokemonContext = {
    selectedPokemons: selectedPokemon,
    addPokemon: addPokemonHandler,
    loadPokemon: loadPokemonHandler,
    pokemonList: pokemonList,
    isActive: isActive,
    getNumberFromUrl: getNumberFromUrl,
    selectPokemon: selectPokemon,
    isSelected: state.isSelected,
    removePokemon: removePokemonHandler,
  };

  return (
    <PokemonListContext.Provider value={pokemonContext}>
      {props.children}
    </PokemonListContext.Provider>
  );
};

export default PokemonListProvider;
