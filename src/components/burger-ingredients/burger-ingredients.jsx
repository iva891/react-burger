import React, { useState } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from './parts/card';

import style from './burger-ingredients.module.scss';
import { dataPropTypes } from '../../utils/constants';

const cn = classnames.bind(style);

const BurgerIngredients = ({ data }) => {
    const [current, setCurrent] = useState('one');

    return (
        <section className={cn('burger-ingredients', 'pt-10')}>
            <h1 className={cn('text text_type_main-large mb-5')}>Соберите бургер</h1>
            <div style={{ display: 'flex' }} className={cn('burger-ingredients_tabs')}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={cn('burger-ingredients_ingredients-wrapper')}>
                <h2 className={cn('text text_type_main-medium mt-10')}>Булки</h2>
                <div className={cn('burger-ingredients_card-list')}>
                    {data.filter((item) => item.type === 'bun').map((item) => <Card data={item} key={data.id}/>)}
                </div>
                <h2 className={cn('text text_type_main-medium mt-10')}>Соусы</h2>
                <div className={cn('burger-ingredients_card-list')}>
                    {data.filter((item) => item.type === 'sauce').map((item) => <Card data={item} key={data.id}/>)}
                </div>
                <h2 className={cn('text text_type_main-medium mt-10')}>Начинки</h2>
                <div className={cn('burger-ingredients_card-list')}>
                    {data.filter((item) => item.type === 'main').map((item) => <Card data={item} key={data.id}/>)}
                </div>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes)
};

export default BurgerIngredients;
