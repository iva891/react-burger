import React from 'react';
import classnames from 'classnames/bind';

import { dataPropTypes } from '../../utils/constants';
import style from './ingredient-details.module.scss';

const cn = classnames.bind(style);

const IngredientDetails = ({ data }) => {

    return (
        <>
            <div className={cn('ingredient-details')} >
                <img src={data.image_large} alt={data.name} className={cn('ingredient-details_img', 'mb-4')} />
                <h3 className={cn('text text_type_main-medium mb-8')}>{data.name}</h3>
                <ul className={cn('ingredient-details_list')}>
                    <li className={cn('ingredient-details_item')}>
                        <span className={cn('text text_type_main-default text_color_inactive pb-2')}>Калории,ккал</span>
                        <span className={cn('text text_type_digits-default text_color_inactive')}>{data.calories}</span>
                    </li>
                    <li className={cn('ingredient-details_item')}>
                        <span className={cn('text text_type_main-default text_color_inactive pb-2')}>Белки, г</span>
                        <span className={cn('text text_type_digits-default text_color_inactive')}>{data.proteins}</span>
                    </li>
                    <li className={cn('ingredient-details_item')}>
                        <span className={cn('text text_type_main-default text_color_inactive pb-2')}>Жиры, г</span>
                        <span className={cn('text text_type_digits-default text_color_inactive')}>{data.fat}</span>
                    </li>
                    <li className={cn('ingredient-details_item')}>
                        <span className={cn('text text_type_main-default text_color_inactive pb-2')}>Углеводы, г</span>
                        <span className={cn('text text_type_digits-default text_color_inactive')}>{data.carbohydrates}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

IngredientDetails.propTypes = {
    data: dataPropTypes.isRequired
};

export default IngredientDetails;
