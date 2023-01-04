import React, { useState } from 'react';
import classnames from 'classnames/bind';

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { dataPropTypes } from '../../../utils/constants';
import style from '../burger-ingredients.module.scss';
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";

const cn = classnames.bind(style);

const Card = ({ data }) => {
    const [isShowModal, setIsShowModal] = useState(false);

    const openModal = () => {
        setIsShowModal(true);
    }

    const closeModal = () => {
        setIsShowModal(false);
    }

    return (
        <>
            <div className={cn('card')} onClick={openModal}>
                <img src={data.image} alt={data.name} className={cn('card_img')} />
                <div className={cn('card_description-wrapper', 'pb-6')}>
                    <div className={cn('card_price-wrapper', 'mt-2 mb-2')}>
                        <span className={cn('text text_type_digits-default')}>{data.price}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <span className={cn('text text_type_main-default')}>{data.name}</span>
                </div>
                <div className={cn('card_quantity', 'text text_type_digits-default')}>1</div>
            </div>
            {isShowModal && <Modal title={'Детали ингредиента'} onClose={closeModal} children={<IngredientDetails data={data}/>}/>}
        </>
    )
}

Card.propTypes = {
    data: dataPropTypes.isRequired
};

export default Card;
