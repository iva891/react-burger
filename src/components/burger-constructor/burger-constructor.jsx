import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import Item from "./item/item";
import { dataPropTypes, INGREDIENTS_TYPES } from '../../utils/constants';
import style from './burger-constructor.module.scss';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const cn = classnames.bind(style);

const BurgerConstructor = ({ data }) => {
    const { BUN } = INGREDIENTS_TYPES;

    const [isShowModal, setIsShowModal] = useState(false);

    const openModal = () => {
        setIsShowModal(true);
    }

    const closeModal = () => {
        setIsShowModal(false);
    }

    const bunDataElement = useMemo(() => {
        return data.find((item) => item.type === BUN);
    }, [data]);

    const mainDataElements = useMemo(() => {
        return data.filter((item) => item.type !== BUN);
    }, [data]);

    return (
        <section className={cn('burger-constructor', 'pt-25')}>
            <Item data={bunDataElement} isTop />
            <div className={cn('burger-constructor_items-wrapper')}>
                {mainDataElements.map((item) => <Item data={item} key={item._id}/>)}
            </div>
            <Item data={bunDataElement} isBottom />
            <div className={cn('burger-constructor_order-wrapper', 'pt-5 pr-4')}>
                <span className={cn('burger-constructor_order-result', 'text text_type_digits-medium mr-4')}>610</span>
                <CurrencyIcon type="primary" />
                <Button htmlType="button" type="primary" size="large" extraClass="ml-10" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
            {isShowModal && <Modal onClose={closeModal} children={<OrderDetails />}/>}
        </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes).isRequired
};

export default BurgerConstructor;
