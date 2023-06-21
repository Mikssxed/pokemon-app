import { NavLink } from "react-router-dom";
import classes from "./MenuNavigation.module.css";
import { MouseEvent, MouseEventHandler, useContext } from "react";
import PokemonListContext from "../../../store/pokemonList-context";

const MenuNavigation = () => {
  const { pokemonTeam } = useContext(PokemonListContext);
  const clickHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!pokemonTeam[0].name) {
      event.preventDefault();
    }
  };

  return (
    <div className={classes.container}>
      <NavLink
        className={({ isActive }) =>
          !isActive ? classes.link : `${classes.link} ${classes.active}`
        }
        to="/createTeam"
      >
        Select Team
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          !isActive ? classes.link : `${classes.link} ${classes.active}`
        }
        onClick={clickHandler}
        to="/ManageTeam"
      >
        Manage Team
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          !isActive ? classes.link : `${classes.link} ${classes.active}`
        }
        to="/Battle"
      >
        Battle
      </NavLink>
    </div>
  );
};

export default MenuNavigation;
