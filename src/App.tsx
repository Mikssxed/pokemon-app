import "./App.css";
import PokemonList from "./components/PokemonList";
import Team from "./components/Team";
import PokemonListProvider from "./store/PokemonListProvider";

function App() {
  return (
    <PokemonListProvider>
    <div className="App">
      <Team />
      <PokemonList />
    </div>
    </PokemonListProvider>
  );
}

export default App;
