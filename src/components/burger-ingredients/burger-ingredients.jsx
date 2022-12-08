import React, { useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from './card/card';

import style from './burger-ingredients.module.scss';
import { dataPropTypes, INGREDIENTS_TYPES } from '../../utils/constants';

const cn = classnames.bind(style);

const BurgerIngredients = ({ data }) => {
    const [current, setCurrent] = useState('one');

    const { BUN, SAUCE, MAIN } = INGREDIENTS_TYPES;

    const getElementsByType = useCallback((type) => data.filter((item) => item.type === type), [data]);

    return (
        <section className={cn('burger-ingredients', 'pt-10')}>
            <h1 className={cn('text text_type_main-large mb-5')}>Соберите бургер</h1>
            <div style={{ display: 'flex' }} className={cn('burger-ingredients_tabs')}>
                <Tab value={BUN} active={current === BUN} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value={SAUCE} active={current === SAUCE} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value={MAIN} active={current === MAIN} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={cn('burger-ingredients_ingredients-wrapper')}>
                <h2 className={cn('text text_type_main-medium mt-10')}>Булки</h2>
                <div className={cn('burger-ingredients_card-list')}>
                    {getElementsByType(BUN).map((item) => <Card data={item} key={item._id}/>)}
                </div>
                <h2 className={cn('text text_type_main-medium mt-10')}>Соусы</h2>
                <div className={cn('burger-ingredients_card-list')}>
                    {getElementsByType(SAUCE).map((item) => <Card data={item} key={item._id}/>)}
                </div>
                <h2 className={cn('text text_type_main-medium mt-10')}>Начинки</h2>
                <div className={cn('burger-ingredients_card-list')}>
                    {getElementsByType(MAIN).map((item) => <Card data={item} key={item._id}/>)}
                </div>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes).isRequired
};

export default BurgerIngredients;
