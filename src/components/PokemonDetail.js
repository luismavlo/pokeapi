import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getBackgroundByType } from '../helpers/getBackgroundByType'

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState({})
  const navigate = useNavigate();
  const { id } = useParams();
  const theme = useSelector(state => state.theme);

  

  const { backgroundPerType } = getBackgroundByType(pokemonData?.types?.[0]?.type.name)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(res => setPokemonData(res.data))
  }, [id]);

  const back = () => navigate(-1);
  
  const statProgressAttack = (index) =>{
    if(pokemonData?.stats?.[index]?.base_stat <= 40){
      return 'width-low';
    }else if(pokemonData?.stats?.[index]?.base_stat <= 60 && pokemonData?.stats?.[index]?.base_stat > 40){
      return 'width-medium';
    }else if(pokemonData?.stats?.[index]?.base_stat <= 140 && pokemonData?.stats?.[index]?.base_stat > 60){
      return 'width-hight'
    }else{
      return 'width-full';
    }
  }

  return (
      <section className={`bg-detail ${backgroundPerType}`}>
        <div className='back' >
          <i onClick={back} className="fas fa-arrow-circle-left icon"></i>
        </div>
        <article className={`pokemon-data ${theme ? 'darkMode' : 'lightMode'}`}>
          <div className='pokemon-image'>
            <img src={pokemonData?.sprites?.other?.dream_world?.front_default ? pokemonData?.sprites?.other?.dream_world?.front_default : pokemonData?.sprites?.back_default} alt="" />
          </div>
          <div className='content-data'>
            <h1>{pokemonData.name}</h1>
            <div className='data-healt'>
            {pokemonData?.stats?.[0]?.base_stat} / {pokemonData?.stats?.[0]?.base_stat} HP
            </div>
            <div className='inf'>
              <div className='content-data-two'>
                <div className='basic-data'>
                  <div className='weight-info'>
                    <h5>{pokemonData?.weight}kg</h5>
                    <span>Peso</span>
                  </div>
                  <div className='type-info'>
                    <h5>{pokemonData?.types?.[0]?.type.name} / {pokemonData?.types?.[1]?.type.name}</h5>
                    <span>Tipo</span>
                  </div>
                  <div className='height-info'>
                    <h5>{pokemonData?.height}m</h5>
                    <span>Height</span>
                    
                  </div>        
                </div>
                <div className='progress-info'>
                <div>
                    <div className="mb-1 text-base font-medium text-dark-700">Ataque</div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className={`bg-indigo-600 text-xs font-medium text-indigo-100 text-center p-0.5 leading-none rounded-full ${statProgressAttack(1)}`}> { pokemonData?.stats?.[1]?.base_stat } </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 text-base font-medium text-dark-700">Defensa</div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className={`bg-indigo-600 text-xs font-medium text-indigo-100 text-center p-0.5 leading-none rounded-full ${statProgressAttack(2)}`}> { pokemonData?.stats?.[2]?.base_stat } </div>
                    </div>
                  </div>
                  <div className='content-progress'>
                    <div className="mb-1 text-base font-medium text-dark-700">Velocidad</div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className={`bg-indigo-600 text-xs font-medium text-indigo-100 text-center p-0.5 leading-none rounded-full ${statProgressAttack(5)}`}> { pokemonData?.stats?.[5]?.base_stat } </div>
                    </div>
                  </div>

                </div>
            </div>
            <div className='content-data-two'>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">Movimientos</li>
                {
                  pokemonData?.moves?.map(move => (
                    <li key={move?.move?.name} className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">{move?.move?.name}</li>
                  ))
                }
                
            </ul>
            </div>
            </div>
            
          </div>
          
        </article>
      </section>
  );
};

export default PokemonDetail;
