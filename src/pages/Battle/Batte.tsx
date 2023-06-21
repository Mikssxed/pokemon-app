import { useContext } from "react";
import PokemonListContext from "../../store/pokemonList-context";
import PokemonSpriteBack from "./components/PokemonSpriteBack";

const Battle = () => {
  const { pokemonTeam } = useContext(PokemonListContext);

  return (
    <div>
      <PokemonSpriteBack url={pokemonTeam[0].sprites.back_default} />
    </div>
  );
};

export default Battle;
