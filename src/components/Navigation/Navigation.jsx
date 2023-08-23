import './Navigation.css';
import AuthMenu from '../AuthMenu/AuthMenu';
import MainMenu from '../MainMenu/MainMenu'

function Navigation({ isMainPage }) {
	return (
		<nav className="navigation">
			{
				(isMainPage) ?
				<AuthMenu />
				:
				<MainMenu />
			}
		</nav>
	)
}

export default Navigation;