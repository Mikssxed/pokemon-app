import { FC, useContext } from "react";
import styles from "./TrainerStats.module.css";
import PokemonListContext from "../../../store/pokemonList-context";
import { PokemonTeam } from "../../../utils/types/types";
import pokeball from "../../../assets/pokeball.png";
import clsx from "clsx";

const TrainerStats: FC<{
  pokemon: PokemonTeam;
  pokemonTeam: PokemonTeam[];
}> = ({ pokemon, pokemonTeam }) => {
  const { moves } = useContext(PokemonListContext);

  const currentPokemon = {
    ...structuredClone(pokemon),
    selectedMoves: pokemon.selectedMoves.map((move) => {
      if (move === "empty") {
        return { name: move };
      }
      return moves.find((dataMove) => dataMove.name === move);
    }),
  };

  const pokemonBall = pokemonTeam
    .filter((pokemon) => pokemon.name)
    .map((pokemon, index) => (
      <img
        key={`${pokemon.id}${index}`}
        className={clsx(
          styles.pokeball,
          pokemon.stats.hp >= 0 ? styles.active : styles.inactive
        )}
        src={pokeball}
      />
    ));

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {currentPokemon?.name} <span className={styles.level}>lv. 100</span>
      </div>
      <div className={styles.secondRow}>
        <div>{pokemonBall}</div>
        <div className={styles.hp}>
          <div
            className={styles.hpFill}
            style={{
              width: `${(currentPokemon.stats.hp / pokemon.stats.hp) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className={styles.hpNumber}>
        {currentPokemon.stats.hp} / {pokemon.stats.hp}
      </div>
    </div>
  );
};

export default TrainerStats;
