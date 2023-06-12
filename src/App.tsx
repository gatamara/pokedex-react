
import './App.css'
import { LogoPokemon } from './components/LogoPokemon'
import { Route, Routes } from "react-router-dom";
import { MainScreen } from './screens/main/MainScreen';
import { DetailScreen } from './screens/detail/DetailScreen';

function App() {


  return (
    <div className="container">
      <header>
        <LogoPokemon />
      </header>
      <Routes>
        <Route path='/pokedex-react' element={<MainScreen />} />
        <Route path='/pokedex-react/pokemon/:number' element={<DetailScreen />} />
      </Routes>
    </div>
  )
}

export default App
