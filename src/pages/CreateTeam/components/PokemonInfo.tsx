import classes from "./PokemonInfo.module.css";
import pokeball from "../../../assets/pokeball.png";
import PokemonType from "../../../components/PokemonType";
import PokemonListContext from "../../../store/pokemonList-context";
import { useContext } from "react";
import PokemonGraph from "./PokemonGraph";
import { Link } from "react-router-dom";

const PokemonInfo = () => {
  const { pokemonData, isSelected, pokemonTeam } =
    useContext(PokemonListContext);
  const pokemonName =
    pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

  const pokemonTypes = pokemonData.types.map((i, index) => (
    <PokemonType key={`${pokemonData.id}${index}`} type={i} />
  ));

  const pokemonDescription = pokemonData.description
    .split("")
    .map((i) => {
      if (i === "\n" || i === "\f") {
        return (i = " ");
      } else return i;
    })
    .join("");

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
      <div>
        <PokemonGraph pokemonData={pokemonData} />
      </div>
      <div className={classes.description}>{pokemonDescription}</div>
      <div className={classes.nav}>
        <Link
          to={pokemonTeam[0].name ? "/ManageTeam" : "#"}
          className={`${classes.btn} ${pokemonTeam[0].name && classes.enabled}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default PokemonInfo;
