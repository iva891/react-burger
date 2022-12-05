import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import Item from "./parts/item";
import { dataPropTypes } from '../../utils/constants';
import style from './burger-constructor.module.scss';

const cn = classnames.bind(style);

const BurgerConstructor = ({ data }) => {

    return (
        <section className={cn('burger-constructor', 'pt-25')}>
            <Item data={data.find((item) => item.type === 'bun')} isTop />
            <div className={cn('burger-constructor_items-wrapper')}>
                {data.filter((item) => item.type !== 'bun').map((item) => <Item data={item} key={data.id}/>)}
            </div>
            <Item data={data.find((item) => item.type === 'bun')} isBottom />
            <div className={cn('burger-constructor_order-wrapper', 'pt-5 pr-4')}>
                <span className={cn('burger-constructor_order-result', 'text text_type_digits-medium mr-4')}>610</span>
                <CurrencyIcon type="primary" />
                <Button htmlType="button" type="primary" size="large" extraClass="ml-10">
                    Оформить заказ
                </Button>
            </div>

        </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes)
};

export default BurgerConstructor;
