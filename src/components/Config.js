import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setItemPerPage, setTheme } from '../redux/actions';


const Config = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const theme = useSelector(state => state.theme);

    const back = () => navigate(-1);

  return (
      <section className={`content-main-page ${theme ? 'darkMode' : 'lightMode' }`}>
        <div className='back' >
          <i onClick={back} className={`fas fa-arrow-circle-left icon ${theme ? 'darkMode' : 'lightMode' }`}></i>
        </div>
          <h1>Settings</h1>
          <div className={`content-config ${theme ? 'box-shadow-dark' : 'box-shadow-light'}`}>
            <h2>Tema</h2>
            <div className="switch_box box_1">
              <span className='span-sw'>Light</span>
                <input type="checkbox" className="switch_1" checked={theme ? true : false} onChange={e => dispatch(setTheme(e.target.checked)) } />
              <span className='span-sw'>Dark</span>
            </div>
          </div>
          <div className={`content-config ${theme ? 'box-shadow-dark' : 'box-shadow-light'}`}>
            <h2>Item Por Página</h2>
            <select id="numberPaginate"  onChange={ e => dispatch(setItemPerPage(Number(e.target.value))) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 width-50">
                  <option value={4}>Elija una opción de paginación</option>
                  <option>4</option>
                  <option>8</option>
                  <option>16</option>
                  <option>20</option>
            </select>
          </div>
      </section>
  );
};

export default Config;
