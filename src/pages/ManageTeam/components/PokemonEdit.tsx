import { useContext, useState } from "react";
import PokemonListContext from "../../../store/pokemonList-context";
import PokemonType from "../../../components/PokemonType";
import classes from "./PokemonEdit.module.css";
import pokeball from "../../../assets/pokeball.png";
import { Link } from "react-router-dom";
import Move from "../../../components/Move";

const PokemonEdit = () => {
  const {
    pokemonData,
    isSelected,
    pokemonTeam,
    moves,
    selectedMove,
    addMove,
    removeMove,
    selectMove,
  } = useContext(PokemonListContext);
  const pokemonName =
    pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
  const [moveIndex, setMoveIndex] = useState(5);

  const pokemonTypes = pokemonData.types.map((i, index) => (
    <PokemonType key={`${pokemonData.id}${index}`} type={i} />
  ));

  const selectPokeMove = (index: number) => {
    setMoveIndex(index);
  };

  const damageType = () => {
    if (move?.damage_class === "special") {
      return (
        <img src="https://img.pokemondb.net/images/icons/move-special.png" />
      );
    } else if (move?.damage_class === "physical") {
      return (
        <img src="https://img.pokemondb.net/images/icons/move-physical.png" />
      );
    } else {
      return (
        <img src="https://img.pokemondb.net/images/icons/move-status.png" />
      );
    }
  };

  const move = moves.find((i) => i.name === selectedMove);

  // const choseMove = (name: string) => {
  //   setChosedMove(name);

  // };

  const selectedMoves = pokemonTeam
    .find((p) => p.selected)
    ?.selectedMoves.map((m, index) => {
      if (m === "empty") {
        return <Move key={`${m}${index}`} moveName={m} />;
      }
      return (
        <Move
          selectMove={() => selectMove(m)}
          key={`${m}${index}`}
          moveName={m}
        />
      );
    });

  const emptyIndex = pokemonTeam
    .find((i) => i.selected === true)
    ?.selectedMoves.findIndex((i) => i === "empty");

  const moveDescription = move?.effect_entries[0]?.short_effect.replace(
    " $effect_chance%",
    ""
  );

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
      <div className={classes.pokemonMoves}>{selectedMoves}</div>
      <div className={classes.description}>
        <div className={classes.moveStats}>
          <div className={classes.name}>
            <Move moveName={move!.name} />
          </div>
          <div className={classes.type}>
            Type: <PokemonType type={move!.type} />
          </div>
          <div className={classes.type}>Damage type: {damageType()}</div>
          <div className={classes.stat}>Power: {move?.power}</div>
          <div className={classes.stat}>Accuracy: {move?.accuracy}</div>
          <div className={classes.stat}>PP: {move?.pp}</div>
          <div className={classes.stat}>Priority: {move?.priority}</div>
        </div>
        <p>{moveDescription}</p>
      </div>
      <div className={classes.nav}>
        <div className={classes.moveManage}>
          <button
            onClick={() => addMove(emptyIndex)}
            className={`${classes.btn} ${
              pokemonTeam
                .find((p) => p.selected)
                ?.moves.find((i) => i.move.name === selectedMove) &&
              classes.enabled
            }`}
          >
            ADD
          </button>
          <button
            onClick={() => removeMove(selectedMove)}
            className={`${classes.btn} ${
              pokemonTeam
                .find((i) => i.selected)
                ?.selectedMoves.find((i) => i === selectedMove) &&
              classes.enabled
            }`}
          >
            REMOVE
          </button>
        </div>
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
