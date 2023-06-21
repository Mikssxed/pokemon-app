import { FC } from "react";

const PokemonSpriteBack: FC<{ url: string }> = ({ url }) => {
  return <img src={url} />;
};

export default PokemonSpriteBack;
