import PokemonSprite from "./PokemonSprite";
import styles from "./Enemy.module.css";
import TrainerStats from "./TrainerStats";
import { PokemonTeam } from "../../../utils/types/types";
import { useEffect } from "react";

const Enemy = () => {
  const enemyTeam = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: "Pikachu",
    url: "",
    pokeId: 0,
    selected: false,
    moves: [],
    selectedMoves: ["", "", "", ""],
    sprites: { back_default: "", front_default: "" },
    stats: {
      hp: 120,
      attack: 120,
      defense: 120,
      spAttack: 120,
      spDefense: 120,
      speed: 120,
    },
    active: index === 0 ? true : false,
  }));

  return (
    <div className={styles.container}>
      <TrainerStats
        pokemonTeam={enemyTeam}
        pokemon={enemyTeam.find((pokemon) => pokemon.active) as PokemonTeam}
      />
      <PokemonSprite
        url={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
      />
    </div>
  );
};

export default Enemy;
