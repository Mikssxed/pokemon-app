import { FC, ReactNode, useReducer, useState } from "react";
import PokemonListContext from "./pokemonList-context";
import axios from "axios";
import { Pokemon, PokemonTeam } from "../utils/types/types";

// enum manageActionType {
//   SELECT = "SELECT",
//   SET = "SET",
// }

interface manageState {
  isSelected: boolean;
  selectedPokemon: string | null;
  // isActive: string | null;
  // selectedPokemon: PokemonTeam[];
}

type Select = {
  type: "SELECT";
  payload: boolean;
};

type Set = {
  type: "SET";
  payload: string | null;
};

type manageAction = Select | Set;

const managePokemonReducer = (state: manageState, action: manageAction) => {
  switch (action.type) {
    case "SELECT":
      return {
        ...state,
        isSelected: action.payload,
      };
    case "SET":
      return { ...state, selectedPokemon: action.payload };
    default:
      throw new Error("should not appear");
  }
};

const PokemonListProvider: FC<{ children: ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(managePokemonReducer, {
    isSelected: false,
    selectedPokemon: null,
  });
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  // const [isActive, setIsActive] = useState<string | null>(null);
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
    dispatch({ type: "SELECT", payload: true });
    dispatch({ type: "SET", payload: string });
  };

  const addPokemonHandler = () => {
    const index = selectedPokemon.findIndex((p) => !p.name);
    if (index !== -1) {
      const updatedTeam = [...selectedPokemon];
      updatedTeam[index] = {
        id: updatedTeam[index].id,
        name: state.selectedPokemon,
        url: pokemonList.find((p) => p.name === state.selectedPokemon)!.url,
      };

      setPokemonList(
        pokemonList.filter((p) => p.name !== state.selectedPokemon)
      );

      setSelectedPokemon(updatedTeam);
      dispatch({ type: "SELECT", payload: false });
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
    isActive: state.selectedPokemon,
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
