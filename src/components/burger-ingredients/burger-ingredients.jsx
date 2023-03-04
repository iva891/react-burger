import React, { useCallback, useContext, useRef, useState } from 'react';
import classnames from 'classnames/bind';

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from './card/card';

import style from './burger-ingredients.module.scss';
import { INGREDIENTS_TYPES } from '../../utils/constants';
import { DataContext } from "../../utils/context/app-context";

const cn = classnames.bind(style);

const BurgerIngredients = () => {
    const [ingredientsData] = useContext(DataContext);
    const { data } = ingredientsData;
    const { BUN, SAUCE, MAIN } = INGREDIENTS_TYPES;

    const [current, setCurrent] = useState(BUN);

    const ingredientsRef = useRef([]);

    ingredientsRef.current = new Array(INGREDIENTS_TYPES.length);

    const ingredientsTypes = Object.values(INGREDIENTS_TYPES);

    const handleClick = (e) => {
        setCurrent(e);
        const element = ingredientsTypes.indexOf(e);
        ingredientsRef.current[element].scrollIntoView({behavior: "smooth"});
    };

    const getElementsByType = useCallback((type) => data.filter((item) => item.type === type), [data]);

    if(!data.length) {
        return null;
    }

    return (
        <section className={cn('burger-ingredients', 'pt-10')}>
            <h1 className={cn('text text_type_main-large mb-5')}>Соберите бургер</h1>
            <div style={{ display: 'flex' }} className={cn('burger-ingredients_tabs')}>
                <Tab value={BUN} active={current === BUN} onClick={handleClick}>
                    Булки
                </Tab>
                <Tab value={SAUCE} active={current === SAUCE} onClick={handleClick}>
                    Соусы
                </Tab>
                <Tab value={MAIN} active={current === MAIN} onClick={handleClick}>
                    Начинки
                </Tab>
            </div>
            <div className={cn('burger-ingredients_ingredients-wrapper')}>
                <h2 className={cn('text text_type_main-medium mt-10')} ref={el => ingredientsRef.current[0] = el}>Булки</h2>
                <div className={cn('burger-ingredients_card-list')}>
                    {getElementsByType(BUN).map((item) => <Card data={item} key={item._id}/>)}
                </div>
                <h2 className={cn('text text_type_main-medium mt-10')} ref={el => ingredientsRef.current[1] = el}>Соусы</h2>
                <div className={cn('burger-ingredients_card-list')}>
                    {getElementsByType(SAUCE).map((item) => <Card data={item} key={item._id}/>)}
                </div>
                <h2 className={cn('text text_type_main-medium mt-10')} ref={el => ingredientsRef.current[2] = el}>Начинки</h2>
                <div className={cn('burger-ingredients_card-list')}>
                    {getElementsByType(MAIN).map((item) => <Card data={item} key={item._id}/>)}
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients;
