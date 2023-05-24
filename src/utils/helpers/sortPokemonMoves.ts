interface SortPokemonMovesType {
  move: { name: string };
}

const sortPokemonMoves = (a: SortPokemonMovesType, b: SortPokemonMovesType) => {
  if (a.move.name < b.move.name) {
    return -1;
  }
  if (a.move.name > b.move.name) {
    return 1;
  }
  return 0;
};

export default sortPokemonMoves;
