import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import style from './modal.module.scss';
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const cn = classnames.bind(style);

const Modal = ({ children, title, onClose }) => {

    const modalRoot = document.getElementById("modals");

    const handleKeyPress = (e) => {
        if(e.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [])

    return createPortal(
        <>
            <ModalOverlay onClick={onClose}/>
            <div className={cn('modal', 'p-10', 'pb-15')}>
                <div className={cn('modal_header')}>
                    {title && <h2 className={cn('modal_title', 'text text_type_main-large')}>{title}</h2>}
                    <CloseIcon type="primary" className={cn('modal_icon')} onClick={onClose}/>
                </div>
                {children}
            </div>
        </>,
        modalRoot
    )
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired
};

export default Modal;
