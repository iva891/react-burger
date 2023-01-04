import React from 'react';
import classnames from 'classnames/bind';

import doneIcon from '../../images/done-icon.svg'

import style from './order-details.module.scss';

const cn = classnames.bind(style);

const OrderDetails = () => {

    return (
        <>
            <div className={cn('order-details')} >
                <span className={cn('order-details_id-number', 'text text_type_digits-large mt-4 mb-8')}>034536</span>
                <h3 className={cn('text text_type_main-medium mb-15')}>идентификатор заказа</h3>
                <img src={doneIcon} alt="Done" className={cn('order-details_img', 'mb-15')} />
                <span className={cn('text text_type_main-default mb-2')}>Ваш заказ начали готовить</span>
                <span className={cn('text text_type_main-default text_color_inactive mb-15')}>Дождитесь готовности на орбитальной станции</span>
            </div>
        </>
    )
}

export default OrderDetails;
