import React, { useContext, useEffect, useMemo, useState } from 'react';
import classnames from 'classnames/bind';

import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import Item from "./item/item";
import { INGREDIENTS_TYPES } from '../../utils/constants';
import style from './burger-constructor.module.scss';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { DataContext } from "../../utils/context/app-context";
import { getOrder } from "../../utils/helpers/get-data";

const cn = classnames.bind(style);

const BurgerConstructor = () => {
    const [ingredientsData] = useContext(DataContext);
    const { data } = ingredientsData;
    const { BUN } = INGREDIENTS_TYPES;
    const initialOrderData = {
        order: null,
        pending: false,
        error: null
    }

    const [orderData, setOrderData] = useState(initialOrderData);

    const bunDataElement = useMemo(() => {
        return data.find((item) => item.type === BUN);
    }, [data]);

    const mainDataElements = useMemo(() => {
        return data.filter((item) => item.type !== BUN);
    }, [data]);

    const amount = useMemo(() => {
        return mainDataElements.reduce((sum, item) => sum + item.price, 0) + bunDataElement.price * 2;
    }, [bunDataElement, mainDataElements]);

    const openModal = () => {
        const orderIds = mainDataElements.reduce((arr, item) => [ ...arr, item._id], [bunDataElement._id]);
        setOrderData({ ...orderData, pending: true })
        getOrder({'ingredients': orderIds})
            .then(data => setOrderData({ ...orderData, order: data, pending: false, error: null }))
            .catch(error => {
                setOrderData({ ...orderData, pending: false, error: error.message });
            })
    }

    const closeModal = () => {
        setOrderData(initialOrderData);
    }

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
            {orderData?.order?.order?.number && (<Modal onClose={closeModal}>
                    <OrderDetails number={orderData?.order?.order?.number}/>
                </Modal>
            )}
            {orderData?.error && <span className={`mt-10 text text_type_main-default`}>{`Ошибка: ${orderData?.error}`}</span>}
        </section>
    )
}

export default BurgerConstructor;
