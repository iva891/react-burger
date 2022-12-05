import React from 'react';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";

import style from './app.module.scss';

import data from '../../utils/data';


function App() {
    return (
        <div className={style.App}>
            <AppHeader />
            <main className={style.main}>
                <BurgerIngredients data={data}/>
                <BurgerConstructor data={data}/>
            </main>
        </div>
    );
}

export default App;
