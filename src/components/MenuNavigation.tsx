import { NavLink } from "react-router-dom";
import classes from "./MenuNavigation.module.css";

const MenuNavigation = () => {
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
