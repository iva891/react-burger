import PropTypes from 'prop-types';

export const dataPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired
});

export const INGREDIENTS_TYPES = {
    BUN: 'bun',
    SAUCE: 'sauce',
    MAIN: 'main'
};

export const url = 'https://norma.nomoreparties.space/api/ingredients';
export const orderUrl = 'https://norma.nomoreparties.space/api/orders';
