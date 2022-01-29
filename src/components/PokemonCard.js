import axios from 'axios';
import { Link } from "react-router-dom";
import { getBackgroundByType } from '../helpers/getBackgroundByType'
import React, { useEffect, useState } from 'react';



const PokemonCard = ({url}) => {

  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    axios.get(url)
          .then(res => setPokemonInfo(res.data))
  }, [url]);

  const { bgCpGrass, bgBgGrass, color } = getBackgroundByType(pokemonInfo?.types?.[0]?.type.name)

  
  return (
    
      <div className={`pokemon-card ${color}`}>
        <Link to={`/pokemon/${pokemonInfo?.id}`}>
          <div className={`background ${bgBgGrass}`}>
              <img src={pokemonInfo?.sprites?.other?.dream_world?.front_default ? pokemonInfo?.sprites?.other?.dream_world?.front_default : pokemonInfo?.sprites?.back_default} alt="" className='image'/>
          </div>
          <div className={`content-pk ${bgCpGrass}`}>
              <h2 className='pokemon-name'>{pokemonInfo?.name}</h2>
              <span className='pokemon-type'>{pokemonInfo?.types?.[0]?.type.name}</span>
              <div className='pokemon-stats'>
                  <p>hp: {pokemonInfo?.stats?.[0]?.base_stat}</p>
                  <p>Attack: {pokemonInfo?.stats?.[1]?.base_stat}</p>
                  <p>Defense: {pokemonInfo?.stats?.[2]?.base_stat}</p>
                  <p>Speed: {pokemonInfo?.stats?.[5]?.base_stat}</p>
              </div>
              <h3 className='pokemon-logo'>Pokemon Cards</h3>
          </div>
        </Link>
      </div>
          
  );
};

export default PokemonCard;
