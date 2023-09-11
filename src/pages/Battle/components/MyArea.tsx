import { useContext, useEffect } from "react";
import styles from "./MyArea.module.css";
import PokemonSprite from "./PokemonSprite";
import PokemonListContext from "../../../store/pokemonList-context";
import TrainerStats from "./TrainerStats";
import { PokemonTeam } from "../../../utils/types/types";

const MyArea = () => {
  const { pokemonTeam } = useContext(PokemonListContext);

  return (
    <div className={styles.container}>
      <PokemonSprite url={pokemonTeam[0].sprites.back_default} />
      <TrainerStats
        pokemonTeam={pokemonTeam}
        pokemon={pokemonTeam.find((pokemon) => pokemon.active) as PokemonTeam}
      />
    </div>
  );
};

export default MyArea;
