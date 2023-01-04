import React, { useEffect, useState } from 'react';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { url } from "../../utils/constants";

import style from './app.module.scss';

function App() {

    const [state, setState] = useState({
        data: [],
        pending: true
    });

    useEffect(() => {
        setState({ ...state, pending: true })
        fetch(url)
            .then(response => response.json())
            .then(data => setState({ ...state, data: data.data, pending: false }))
            .catch(error => {
                console.log(error);
                setState({ ...state, pending: false });
            })
    }, []);

    return (
        <div className={style.App}>
            <AppHeader />
            {!state.pending &&
            <main className={style.main}>
                <BurgerIngredients data={state.data} />
                <BurgerConstructor data={state.data} />
            </main>
            }
        </div>
    );
}

export default App;
