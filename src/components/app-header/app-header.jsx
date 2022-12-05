import classnames from 'classnames/bind';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import NavItem from './parts/nav-item';

import style from './app-header.module.scss';

const cn = classnames.bind(style);

const AppHeader = () => {

    return (
        <header className={cn('header')}>
            <nav className={cn('header_navigation', 'pt-4 pb-4')}>
                <div className={cn('header_navigation-wrapper')}>
                    <NavItem Icon={BurgerIcon} text="Конструктор" className="mr-2" isActive />
                    <NavItem Icon={ListIcon} text="Лента заказов" />
                </div>
                <a className={cn('header_item', 'header_item-logo')} href="/">
                    <Logo />
                </a>
                <NavItem Icon={ProfileIcon} text="Личный кабинет" />
            </nav>
        </header>
    )
}

export default AppHeader;
