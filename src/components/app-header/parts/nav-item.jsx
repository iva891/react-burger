import classnames from 'classnames/bind';

import style from '../app-header.module.scss';

const cn = classnames.bind(style);

const NavItem = ({ Icon, text, isActive, className }) => {
    const classNameItem = cn('header_item', 'pt-4', 'pr-5', 'pb-4', 'pl-5', className)

    const classNameText = cn('text', 'text_type_main-default', 'ml-2',
        {
            'text_color_inactive': !isActive
        });

    return (
        <a className={classNameItem} href="/">
            <Icon type={isActive ? 'primary' : 'secondary'} />
            <span className={classNameText}>{text}</span>
        </a>
    )
}

export default NavItem;
