import { FC, useContext } from "react";
import styles from "./TrainerStats.module.css";
import PokemonListContext from "../../../store/pokemonList-context";
import { PokemonTeam } from "../../../utils/types/types";

const TrainerStats: FC<{
  pokemon: PokemonTeam;
  pokemonTeam: PokemonTeam[];
}> = ({ pokemon, pokemonTeam }) => {
  const { moves } = useContext(PokemonListContext);
  return <div className={styles.container}></div>;
};

export default TrainerStats;
