import { useState } from "react";
import pokeball from "../assets/white-pokeball.png";

import classes from "./Team.module.css";
import TeamTile from "./TeamTile";

const Team = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const pokemonTeam = selectedPokemon.map((pokemon, index) => (
    <TeamTile key={index} />
  ));

  return (
    <div>
      <div className={classes.header}>
        <img className={classes.pokeballImg} src={pokeball} />
        <h2 className={classes.headerText}>Current Party</h2>
      </div>
      <div className={classes.teamTileContainer}>{pokemonTeam}</div>
    </div>
  );
};

export default Team;
