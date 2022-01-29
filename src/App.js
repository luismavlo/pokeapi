import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import ProtectedRoutes from './components/ProtectedRoutes';
import Config from './components/Config';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={ <Pokedex />} />
          <Route path='/pokemon/:id' element={ <PokemonDetail /> }/>
          <Route path='/config' element={ <Config /> } />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
