import { Link, useLocation } from "react-router-dom";
import './Header.css'
import logo from "../../images/logo.svg"
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
	const location = useLocation();
	const { pathname } = location;
	return (
		<>
			{(pathname === '/') && (
				<header className='header header_place_not-sign'>
					<Link to='/' className='header__logo'>
						<img src={logo} alt='Лого'/>
					</Link>
					<Navigation isMainPage={!loggedIn}/>
				</header>
			)}
			{(['/movies', '/saved-movies', '/profile'].includes(pathname)) && (
				<header className='header header_place_not-sign header_color_black'>
					<Link to='/' className='header__logo'>
						<img src={logo} alt='Лого'/>
					</Link>
					<Navigation isMainPage={!loggedIn}/>
				</header>
			)}
			{(['/signup', '/signin'].includes(pathname)) && (
				<header className='header header_place_sign header_color_black'>
					<Link to='/' className='header__logo'>
						<img src={logo} alt='Лого'/>
					</Link>
				</header>
			)}
		</>
	)
}

export default Header;