import React from 'react';
import classnames from 'classnames/bind';

import style from './modal-overlay.module.scss';
import PropTypes from "prop-types";

const cn = classnames.bind(style);

const ModalOverlay = ({onClick}) => {

    return (
        <div className={cn('modal-overlay')} onClick={onClick}/>
    )
};

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default ModalOverlay;
