import PropTypes from 'prop-types';

export const dataPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
});

export const INGREDIENTS_TYPES = {
    BUN: 'bun',
    SAUCE: 'sauce',
    MAIN: 'main'
};
