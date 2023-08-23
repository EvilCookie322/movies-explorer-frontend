import { Link, NavLink } from "react-router-dom";
import './MainMenu.css';
import profileLogo from '../../images/profile-logo.svg';
import { useState } from 'react';

function MainMenu() {
	const [isBurgerClicked, setIsBurgerClicked] = useState(false);
	const handleBurgerClick = () => {
		setIsBurgerClicked(!isBurgerClicked);
	}
	return (
		<>
			<div className={`main-menu__overlay${isBurgerClicked ? " main-menu__overlay_visible" : ""}`}>
				<ul className={`main-menu${isBurgerClicked ? " main-menu_visible" : ""}`}>
					<li className='main-menu__item'>
						<NavLink
							to='/'
							className='link main-menu__link'
						>Главная</NavLink>
					</li>
					<li className='main-menu__item'>
						<NavLink
							to='/movies'
							className={({ isActive }) => (`link main-menu__link${isActive ? ' main-menu__link_active' : ''}`)}
						>
							Фильмы
						</NavLink>
					</li>
					<li className='main-menu__item'>
						<NavLink
							to='/saved-movies'
							className={({ isActive }) => (`link main-menu__link${isActive ? ' main-menu__link_active' : ''}`)}
						>
							Сохранённые фильмы
						</NavLink>
					</li>
					<li className='main-menu__item'>
						<Link to='/profile' className='link main-menu__link profile-link'>
							Аккаунт
							<img src={profileLogo} className='profile-link__logo' alt="Логотип профиля" />
						</Link>
					</li>
				</ul>
				<button type="button" className={`burger${isBurgerClicked ? " burger_opened" : ""}`} onClick={handleBurgerClick}></button>
			</div>
		</>
	);
}

export default MainMenu;