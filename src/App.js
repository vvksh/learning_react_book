import './App.css';
import data from "./data/recipes.json"
import Menu from "./components/Menu"

function App() {
  return (
    <div className="App">
      <Menu recipes={data} title="Delicious Recipes"/>
    </div>
  );
}

export default App;
