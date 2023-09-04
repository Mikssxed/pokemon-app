import { useContext } from "react";
import styles from "./MyArea.module.css";
import PokemonSpriteBack from "./PokemonSpriteBack";
import PokemonListContext from "../../../store/pokemonList-context";

const MyArea = () => {
  const { pokemonTeam } = useContext(PokemonListContext);
  console.log(pokemonTeam);
  return (
    <div className={styles.container}>
      <PokemonSpriteBack url={pokemonTeam[0].sprites.back_default} />
      <div className={styles.trainerStats}></div>
    </div>
  );
};

export default MyArea;
