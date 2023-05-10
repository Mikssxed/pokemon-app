import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>
          PokeBuilder: Create Your Pokémon Team, Customize Move Sets, and Battle
        </h1>
        <p>
          PokeBuilder is a web application that allows Pokémon trainers to build
          their ultimate team, customize move sets, and engage in thrilling
          battles. Choose your team of six Pokémon from a comprehensive
          database. Access detailed information about their natures, stats, and
          unique characteristics. Customize move sets with a wide range of
          moves, each with detailed descriptions and effects. Put your team to
          the test in dynamic battles against computer-controlled trainers.
          Manage multiple teams, search for specific Pokémon or moves, and share
          your teams and battle replays. Join PokeBuilder and unleash your inner
          Pokémon trainer today!
        </p>
        <Link className={classes.start} to="createTeam">
          START
        </Link>
      </div>
    </div>
  );
};

export default Home;
