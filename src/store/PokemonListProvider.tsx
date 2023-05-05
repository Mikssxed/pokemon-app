import { FC, ReactNode, useEffect, useReducer } from "react";
import PokemonListContext from "./pokemonList-context";
import axios from "axios";
import {
  Pokemon,
  PokemonData,
  PokemonDataAPI,
  PokemonTeam,
  selectedPokemon,
} from "../utils/types/types";

interface manageState {
  isSelected: boolean;
  selectedPokemon: selectedPokemon;
  pokemonList: Pokemon[];
  pokemonTeam: PokemonTeam[];
  pokemonData: PokemonData;
}

type Load = {
  type: "LOAD";
  payload: Pokemon[];
};

type Add = {
  type: "ADD";
  payload: number;
};

type Select = {
  type: "SELECT";
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

type manageAction = Select | Set | Load | Add | Remove | Data;

const managePokemonReducer = (state: manageState, action: manageAction) => {
  switch (action.type) {
    case "SELECT":
      return {
        ...state,
        isSelected: action.payload,
      };
    case "SET":
      return { ...state, selectedPokemon: action.payload };
    case "LOAD":
      return {
        ...state,
        pokemonList: action.payload,
      };
    case "ADD":
      return {
        ...state,
        pokemonList: state.pokemonList.filter(
          (p) => p.name !== state.selectedPokemon.name
        ),
        pokemonTeam: state.pokemonTeam.map((p) => {
          if (p.id === action.payload + 1) {
            return {
              ...p,
              name: state.selectedPokemon.name,
              url: state.pokemonList.find(
                (pokemon) => pokemon.name === state.selectedPokemon.name
              )!.url,
              pokeId: state.selectedPokemon.pokeId,
            };
          } else {
            return p;
          }
        }),
      };
    case "REMOVE":
      return {
        ...state,
        pokemonTeam: state.pokemonTeam
          .map((p, i) => {
            if (p.id === action.payload + 1) {
              return {
                ...p,
                name: "",
                url: "",
              };
            } else {
              return p;
            }
          })
          .sort((a, b) => b.name!.length - a.name!.length)
          .map((p, i) => {
            return { ...p, id: i + 1 };
          }),
        pokemonList: [
          ...state.pokemonList,
          {
            name: state.pokemonTeam[action.payload].name,
            url: state.pokemonTeam[action.payload].url,
          } as Pokemon,
        ].sort(
          (prev, now) =>
            +getNumberFromUrl(prev.url) - +getNumberFromUrl(now.url)
        ),
      };
    case "DATA":
      return {
        ...state,
        pokemonData: {
          name: action.payload.name,
          id: action.payload.id,
          types: action.payload.types,
          description: action.payload.description,
        },
      };
    default:
      throw new Error("should not appear");
  }
};

const getNumberFromUrl = (url: string) => {
  const numberUrl = url.split("/")[6];
  return numberUrl;
};

const PokemonListProvider: FC<{ children: ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(managePokemonReducer, {
    isSelected: false,
    selectedPokemon: { name: "", pokeId: 0 },
    pokemonList: [],
    pokemonTeam: [
      { id: 1, name: "", url: "", pokeId: 0 },
      { id: 2, name: "", url: "", pokeId: 0 },
      { id: 3, name: "", url: "", pokeId: 0 },
      { id: 4, name: "", url: "", pokeId: 0 },
      { id: 5, name: "", url: "", pokeId: 0 },
      { id: 6, name: "", url: "", pokeId: 0 },
    ],
    pokemonData: { name: "", id: 0, types: [""], description: "" },
  });

  useEffect(() => {
    if (state.selectedPokemon.name) {
      axios
        .all<{ data: PokemonDataAPI }>([
          axios.get(
            `https://pokeapi.co/api/v2/pokemon/${state.selectedPokemon.pokeId}`
          ),
          axios.get(
            `https://pokeapi.co/api/v2/pokemon-species/${state.selectedPokemon.pokeId}`
          ),
        ])
        .then(
          axios.spread((...responses) => {
            const basicData = responses[0].data;
            const speciesData = responses[1].data;
            const enIndex = speciesData.flavor_text_entries.findIndex(
              (i) => i.language.name === "en"
            );
            const pokemon: PokemonData = {
              name: basicData.name,
              id: basicData.id,
              types: basicData.types.map((i) => i.type.name),
              description: speciesData.flavor_text_entries[enIndex].flavor_text,
            };
            dispatch({ type: "DATA", payload: pokemon });
            console.log(pokemon);
          })
        )
        .catch((error) => {
          console.error("Error fetching Pokemon:", error);
        });
    }
  }, [state.selectedPokemon]);

  const loadPokemonHandler = () => {
    axios
      .get<{ results: Pokemon[] }>(
        "https://pokeapi.co/api/v2/pokemon-species?limit=905"
      )
      .then((res) => {
        dispatch({ type: "LOAD", payload: res.data.results });
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
      });
  };

  const selectPokemon = (object: selectedPokemon) => {
    dispatch({ type: "SELECT", payload: true });
    dispatch({ type: "SET", payload: object });
  };

  const addPokemonHandler = () => {
    const index: number = state.pokemonTeam.findIndex(
      (p: PokemonTeam) => !p.name
    );
    if (index !== -1) {
      dispatch({ type: "ADD", payload: index });
      dispatch({ type: "SELECT", payload: false });
    } else {
      console.log("Team is full");
    }
  };

  // const sortPokemonList = (list: Pokemon[]) => {
  //   return list.sort(
  //     (prev, now) => +getNumberFromUrl(prev.url) - +getNumberFromUrl(now.url)
  //   );
  // };

  const removePokemonHandler = (object: selectedPokemon) => {
    selectPokemon(object);
    console.log(object);

    const removedPokemon: number = state.pokemonTeam.findIndex(
      (p) => p.name === object.name
    );

    dispatch({ type: "REMOVE", payload: removedPokemon });

    // setPokemonList(
    //   sortPokemonList([
    //     ...pokemonList,
    //     {
    //       name: removedPokemonData!.name,
    //       url: removedPokemonData!.url,
    //     } as Pokemon,
    //   ])
    // );
  };

  const pokemonContext = {
    selectedPokemons: state.pokemonTeam,
    addPokemon: addPokemonHandler,
    loadPokemon: loadPokemonHandler,
    pokemonList: state.pokemonList,
    isActive: state.selectedPokemon.name,
    getNumberFromUrl: getNumberFromUrl,
    selectPokemon: selectPokemon,
    isSelected: state.isSelected,
    removePokemon: removePokemonHandler,
    pokemonData: state.pokemonData,
  };

  return (
    <PokemonListContext.Provider value={pokemonContext}>
      {props.children}
    </PokemonListContext.Provider>
  );
};

export default PokemonListProvider;
