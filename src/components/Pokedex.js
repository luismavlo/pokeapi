import PokemonList from './PokemonList';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Pokedex = () => {
    const name  = useSelector(state => state.name);
    const [isChange, setIsChange] = useState(false);
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    
    const [pokemonSearched, setPokemonSearched] = useState('');
    const navigate = useNavigate();

    

    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=1119&offset=0')
            .then(res => setPokemons(res.data.results));
    }, []);

    
    const handleSwiche = () => {
      setIsChange(!isChange)
    }

    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setPokemonTypes(res.data.results))
    }, []);

    const filteredPokemon = index =>{
          axios.get(`https://pokeapi.co/api/v2/type/${String(+index+1)}/`)
            .then(res => setPokemons(res.data.pokemon));     
    }

    const theme = useSelector(state => state.theme);
    
 

    const itemPerPage = useSelector(state => state.itemPerPage);

   

    const paginatedPokemons = () => {
      return pokemons.slice(currentPage, currentPage+itemPerPage);
    }

    const nextPage = () =>{
      if( pokemons.length > currentPage + itemPerPage){ 
          setCurrentPage(currentPage + itemPerPage);
          }
    }

    const prevPage = () =>{
      if( currentPage > 0 ){
          setCurrentPage(currentPage - itemPerPage);
          }
    }



    const searchPoke = () => navigate(`/pokemon/${pokemonSearched}`);

    const back = () => navigate('/');

    const config = () => navigate('/config');

  return (
      <div className={`content-main-page ${theme ? 'darkMode' : 'lightMode' }`}>
        <div className='back' >
          <i onClick={back} className={`fas fa-arrow-circle-left icon ${theme ? 'darkMode' : 'lightMode' }`}></i>
        </div>
        <div className='gear'>
          <i className={`fas fa-cog icon ${theme ? 'darkMode' : 'lightMode' }`} onClick={config}></i>
        </div>
        <div className='pokedex-title'>
          <h1>Pokedex</h1>
          <h5>Bienvenido {name}, aquí podras encontrar tu pokemon favorito</h5>
        </div>
        <div className='search-pokemon'>
        <div className="switch_box box_1">
              <span>tipo</span>
                <input type="checkbox" className="switch_1" onChange={ handleSwiche } />
              <span>pokemon</span>
        </div>
        <form action="" className='formSubmitNamePoke'>
          {
            isChange ? (
              <>
                <div className='flex-row input-group'>
                  <input type="text" id="pokeName" value={pokemonSearched} onChange={e => setPokemonSearched(e.target.value)} className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Ingrese El nombre del Pokemon' required/>
                  <button onClick={searchPoke} className='btn-search'>Submit</button>
                </div>
              </>
              ) : (
              <>
                <select id="type" onChange={(e) => filteredPokemon(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {
                    pokemonTypes?.map((pokemonType, index) => (
                      <option value={index} key={pokemonType.name}>{pokemonType.name}</option>
                    ))
                  }
                </select>
              </>
            )
          }
        </form>
        
        </div>
        <PokemonList paginatedPokemons={paginatedPokemons} />
        <div className='btn-group'>
            <button className='next' onClick={prevPage}>
              Anteriores
            </button>
            &nbsp;
            <button className='next' onClick={nextPage}>
               Siguientes
            </button>
        </div>
      </div>
  );
};

export default Pokedex;
