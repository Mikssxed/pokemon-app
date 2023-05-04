import { FC, ReactNode, useEffect, useReducer } from "react";
import PokemonListContext from "./pokemonList-context";
import axios from "axios";
import { Pokemon, PokemonData, PokemonTeam } from "../utils/types/types";

interface manageState {
  isSelected: boolean;
  selectedPokemon: string | null;
  pokemonList: Pokemon[];
  pokemonTeam: PokemonTeam[];
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
  payload: string | null;
};

type Remove = {
  type: "REMOVE";
  payload: number;
};

type manageAction = Select | Set | Load | Add | Remove;

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
          (p) => p.name !== state.selectedPokemon
        ),
        pokemonTeam: state.pokemonTeam.map((p) => {
          if (p.id === action.payload + 1) {
            return {
              ...p,
              name: state.selectedPokemon,
              url: state.pokemonList.find(
                (pokemon) => pokemon.name === state.selectedPokemon
              )!.url,
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
    selectedPokemon: null,
    pokemonList: [],
    pokemonTeam: [
      { id: 1, name: "", url: "" },
      { id: 2, name: "", url: "" },
      { id: 3, name: "", url: "" },
      { id: 4, name: "", url: "" },
      { id: 5, name: "", url: "" },
      { id: 6, name: "", url: "" },
    ],
  });

  useEffect(() => {
    if (state.selectedPokemon) {
      axios
        .all<{ data: PokemonData }>([
          axios.get(
            `https://pokeapi.co/api/v2/pokemon/${state.selectedPokemon.toLowerCase()}`
          ),
          axios.get(
            `https://pokeapi.co/api/v2/pokemon-species/${state.selectedPokemon.toLowerCase()}`
          ),
        ])
        .then(
          axios.spread((...responses) => {
            const basicData = responses[0].data;
            const speciesData = responses[1].data;
            const pokemon: PokemonData = {
              name: basicData.name,
              id: basicData.id,
            };

            console.log(basicData);
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

  const selectPokemon = (string: string | null) => {
    dispatch({ type: "SELECT", payload: true });
    dispatch({ type: "SET", payload: string });
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

  const removePokemonHandler = (string: string | null) => {
    selectPokemon(string);

    const removedPokemon: number = state.pokemonTeam.findIndex(
      (p) => p.name === string
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
    isActive: state.selectedPokemon,
    getNumberFromUrl: getNumberFromUrl,
    selectPokemon: selectPokemon,
    isSelected: state.isSelected,
    removePokemon: removePokemonHandler,
    // loadPokemonData: loadPokemonData,
  };

  return (
    <PokemonListContext.Provider value={pokemonContext}>
      {props.children}
    </PokemonListContext.Provider>
  );
};

export default PokemonListProvider;
