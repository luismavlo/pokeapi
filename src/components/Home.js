import React, { useState } from 'react';
import trainer from '../assets/trainer.png'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setName } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nameUser, setNameUser] = useState('');
  const theme = useSelector(state => state.theme);
  
  const submit = (e) => {
    e.preventDefault();
    dispatch(setName(nameUser))
    navigate('/pokedex');
  }


  
  return (
    <section className={`content-home ${theme ? 'darkMode' : 'lightMode' }`}>
      <section className='content'>
          <div className='hero'>
            <h1>Hola Entrenador!</h1>
            <img src={trainer} alt="Img Entrenador Pokemón" />
          </div>
          <form className='session-start' onSubmit={submit}>
            <p>Ingresa tu nombre para iniciar</p>
            <div className='flex-row input-group'>
                <input type="text" className='input-name' onChange={e => setNameUser(e.target.value)} />
                <input type="submit" value="Entrar"  className='button-start'/>
            </div>
          </form>
      </section>
     </section>
  );
};

export default Home;
