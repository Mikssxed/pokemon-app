import pokeball from "../assets/white-pokeball.png";

import classes from "./Team.module.css";
import TeamTile from "./TeamTile";

const Team = () => {
  return (
    <div>
      <div className={classes.header}>
        <img className={classes.pokeballImg} src={pokeball} />
        <h2 className={classes.headerText}>Current Party</h2>
      </div>
      <div className={classes.teamTileContainer}>
        <TeamTile />
        <TeamTile />
        <TeamTile />
        <TeamTile />
        <TeamTile />
        <TeamTile />
      </div>
    </div>
  );
};

export default Team;
