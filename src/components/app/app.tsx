import React, { useEffect, useState } from 'react';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import { DataContext } from '../../utils/context/app-context';
import { getData } from '../../utils/helpers/get-data';

import style from './app.module.scss';


function App() {

    const ingredientsDataState = useState({
        data: [],
        pending: true,
        error: null
    });

    const [ingredientsData, setIngredientsData] = ingredientsDataState;

    useEffect(() => {
        setIngredientsData({ ...ingredientsData, pending: true })
        getData()
            .then(data => setIngredientsData({ ...ingredientsData, data: data.data, pending: false, error: null }))
            .catch(error => {
                setIngredientsData({ ...ingredientsData, pending: false, error: error.message });
            })
    }, []);

    return (
        <div className={style.App}>
            <AppHeader />
            {ingredientsData.error &&
            <div className={`mt-10 text text_type_main-large ${style.message}`}>{`Ошибка: ${ingredientsData.error}`}</div>}
            {ingredientsData.pending ?
                <div className={style.loader} />
                : <main className={style.main}>
                    <DataContext.Provider value={ingredientsDataState}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </DataContext.Provider>
                </main>
            }
        </div>
    );
}

export default App;
