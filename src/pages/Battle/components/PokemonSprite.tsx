import { FC } from "react";
import styles from "./PokemonSprite.module.css";

const PokemonSprite: FC<{ url: string }> = ({ url }) => {
  return <img className={styles.sprite} src={url} />;
};

export default PokemonSprite;
