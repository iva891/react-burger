import React, { useEffect, useState } from 'react';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { url } from "../../utils/constants";
import { getData } from '../../utils/helpers/get-data';

import style from './app.module.scss';

function App() {

    const [state, setState] = useState({
        data: [],
        pending: true,
        error: null
    });

    useEffect(() => {
        setState({ ...state, pending: true })
        getData()
            .then(data => setState({ ...state, data: data.data, pending: false, error: null }))
            .catch(error => {
                setState({ ...state, pending: false, error: error.message });
            })
    }, []);

    return (
        <div className={style.App}>
            <AppHeader />
            {state.error &&
            <div className={`mt-10 text text_type_main-large ${style.message}`}>{`Ошибка: ${state.error}`}</div>}
            {state.pending ?
                <div className={style.loader} />
                : <main className={style.main}>
                    <BurgerIngredients data={state.data} />
                    <BurgerConstructor data={state.data} />
                </main>
            }
        </div>
    );
}

export default App;
