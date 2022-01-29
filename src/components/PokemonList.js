import PokemonCard from './PokemonCard';

const PokemonList = ({paginatedPokemons}) => {
  
  return (
      <section className='pokemon-card-container'>
          {
            paginatedPokemons().map(pokemon => (
              <PokemonCard url={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
            ))
          }
      </section>
  );
};

export default PokemonList;
