
import './App.css'
import { LogoPokemon } from './components/LogoPokemon'
import { Route, Routes } from "react-router-dom";
import { MainScreen } from './screens/main/MainScreen';
import { DetailScreen } from './screens/detail/DetailScreen';
import { Header } from './components/Header';

function App() {


  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/pokedex-react' element={<MainScreen />} />
        <Route path='/pokedex-react/pokemon/:number' element={<DetailScreen />} />
      </Routes>
    </div>
  )
}

export default App
