import React, { useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import Item from "./item/item";
import { dataPropTypes, INGREDIENTS_TYPES } from '../../utils/constants';
import style from './burger-constructor.module.scss';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { DataContext } from "../../utils/context/app-context";

const cn = classnames.bind(style);

const BurgerConstructor = () => {
    const [ingredientsData] = useContext(DataContext);
    const { data } = ingredientsData;
    const { BUN } = INGREDIENTS_TYPES;

    const [isShowModal, setIsShowModal] = useState(false);
    const [amount, setAmount] = useState(0);
    const [orderIds, setOrderIds] = useState([]);

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

    useEffect(() => {
        setAmount(mainDataElements.reduce((sum, item) => sum + item.price, 0) + bunDataElement.price * 2);
        setOrderIds(mainDataElements.reduce((arr, item) => [ ...arr, item._id], [bunDataElement._id]));
    }, [bunDataElement, mainDataElements]);

    if(!data.length) {
        return null;
    }

    return (
        <section className={cn('burger-constructor', 'pt-25')}>
            <Item data={bunDataElement} isTop />
            <div className={cn('burger-constructor_items-wrapper')}>
                {mainDataElements.map((item) => <Item data={item} key={item._id} />)}
            </div>
            <Item data={bunDataElement} isBottom />
            <div className={cn('burger-constructor_order-wrapper', 'pt-5 pr-4')}>
                <span className={cn('burger-constructor_order-result', 'text text_type_digits-medium mr-4')}>{amount}</span>
                <CurrencyIcon type="primary" />
                <Button htmlType="button" type="primary" size="large" extraClass="ml-10" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
            {isShowModal && (<Modal onClose={closeModal}>
                    <OrderDetails orderIds={orderIds}/>
                </Modal>
            )}
        </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes)
};

export default BurgerConstructor;
