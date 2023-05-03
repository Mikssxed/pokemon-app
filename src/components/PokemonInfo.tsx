import classes from "./PokemonInfo.module.css";
import pokeball from "../assets/pokeball.png";
import PokemonType from "./PokemonType";

const PokemonInfo = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.holder}>
          <img src={pokeball} height="50" />
          <h1>
            <span>No. 179</span> Eevee
          </h1>
        </div>
        <div className={classes.levelBlock}>Lv. 100</div>
      </div>
      <div className={classes.typeContainer}>
        <PokemonType>Normal</PokemonType>
        <PokemonType>Ice</PokemonType>
      </div>
      <div>Graph</div>
      <div></div>
      <div className={classes.natureContainer}>Nature</div>
      <div>Description</div>
    </div>
  );
};

export default PokemonInfo;
