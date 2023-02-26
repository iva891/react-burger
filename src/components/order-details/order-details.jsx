import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';

import doneIcon from '../../images/done-icon.svg'

import style from './order-details.module.scss';
import { getOrder } from "../../utils/helpers/get-data";
import PropTypes from "prop-types";

const cn = classnames.bind(style);

const OrderDetails = ({ orderIds }) => {
    const [orderData, setOrderData] = useState({
        order: {},
        pending: true,
        error: null
    });

    useEffect(() => {
        setOrderData({ ...orderData, pending: true })
        getOrder({'ingredients': orderIds})
            .then(data => setOrderData({ ...orderData, order: data, pending: false, error: null }))
            .catch(error => {
                setOrderData({ ...orderData, pending: false, error: error.message });
            })
    }, []);

    if(orderData.pending) {
        return (<div className={cn('loader')} />)
    }

    if(orderData.error) {
        return (<div className={`mt-10 text text_type_main-default`}>{`Ошибка: ${orderData.error}`}</div>)
    }

    return (
        <>
            <div className={cn('order-details')} >
                <span className={cn('order-details_id-number', 'text text_type_digits-large mt-4 mb-8')}>{orderData.order.order.number}</span>
                <h3 className={cn('text text_type_main-medium mb-15')}>идентификатор заказа</h3>
                <img src={doneIcon} alt="Done" className={cn('order-details_img', 'mb-15')} />
                <span className={cn('text text_type_main-default mb-2')}>Ваш заказ начали готовить</span>
                <span className={cn('text text_type_main-default text_color_inactive mb-15')}>Дождитесь готовности на орбитальной станции</span>
            </div>
        </>
    )
}

OrderDetails.propTypes = {
    orderIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default OrderDetails;
