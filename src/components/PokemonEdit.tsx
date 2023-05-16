import { useContext } from "react";
import PokemonListContext from "../store/pokemonList-context";
import PokemonType from "./PokemonType";
import classes from "./PokemonEdit.module.css";
import pokeball from "../assets/pokeball.png";
import { Link } from "react-router-dom";

const PokemonEdit = () => {
  const { pokemonData, isSelected, pokemonTeam } =
    useContext(PokemonListContext);
  const pokemonName =
    pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

  const pokemonTypes = pokemonData.types.map((i, index) => (
    <PokemonType key={`${pokemonData.id}${index}`} type={i} />
  ));

  //   const pokemonDescription = pokemonData.description
  //     .split("")
  //     .map((i) => {
  //       if (i === "\n" || i === "\f") {
  //         return (i = " ");
  //       } else return i;
  //     })
  //     .join("");

  return (
    <div className={`${classes.container} ${isSelected && classes.active}`}>
      <div className={classes.header}>
        <div className={classes.holder}>
          <img src={pokeball} height="50" />
          {pokemonData.name && (
            <h1 className={classes.pokeHeader}>
              <span>No. {pokemonData.id}</span> {pokemonName}
            </h1>
          )}
        </div>
        {pokemonData.name && <div className={classes.levelBlock}>Lv. 100</div>}
      </div>
      <div className={classes.typeContainer}>{pokemonName && pokemonTypes}</div>
      <div></div>
      <div className={classes.description}></div>
      <div className={classes.nav}>
        <Link
          to={pokemonTeam[0].name ? "/Battle" : "#"}
          className={`${classes.btn} ${pokemonTeam[0].name && classes.enabled}`}
        >
          Battle
        </Link>
      </div>
    </div>
  );
};

export default PokemonEdit;
