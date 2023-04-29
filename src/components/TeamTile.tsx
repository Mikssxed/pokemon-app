import { FC, useContext } from "react";
import classes from "./TeamTile.module.css";
import { PokemonTeam } from "../utils/types/types";
import PokemonListContext from "../store/pokemonList-context";

const TeamTile: FC<{ pokemonData: PokemonTeam; onClick: () => void }> = ({
  pokemonData,
  onClick,
}: {
  pokemonData: PokemonTeam;
  onClick: () => void;
}) => {
  const { getNumberFromUrl } = useContext(PokemonListContext);

  return (
    <div onClick={onClick} className={classes.tile}>
      {pokemonData.name && (
        <>
          <header>
            <div className={classes.levelBlock}>Lv. 100</div>
            <h3>{pokemonData.name}</h3>
          </header>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getNumberFromUrl(
              pokemonData.url
            )}.png`}
          />
        </>
      )}
    </div>
  );
};

export default TeamTile;
