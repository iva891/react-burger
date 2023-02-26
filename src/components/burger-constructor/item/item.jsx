import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import style from '../burger-constructor.module.scss';
import { dataPropTypes } from '../../../utils/constants';

const cn = classnames.bind(style);

const Item = ({ data, isTop, isBottom }) => {
    let type;

    if(isTop) type = 'top';
    if(isBottom) type = 'bottom';

    const isLocked = isTop || isBottom;

    const getBunPosition = () => {
        if(isTop) {
            return ' (верх)'
        }
        if(isBottom) {
            return ' (низ)'
        }
        return '';
    }

    return (
        <div className={cn('item_wrapper', 'mr-3 mb-4')}>
            {!isLocked && <DragIcon type="primary" />}
            <ConstructorElement
                type={type}
                isLocked={isLocked}
                text={`${data.name}${getBunPosition()}`}
                price={data.price}
                thumbnail={data.image}
                extraClass={isBottom && 'mt-6'}
            />
        </div>
    )
};

Item.propTypes = {
    data: dataPropTypes.isRequired,
    isTop: PropTypes.bool,
    isBottom: PropTypes.bool
};

export default Item;
