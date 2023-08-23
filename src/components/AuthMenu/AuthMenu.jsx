import { Link } from "react-router-dom";
import './AuthMenu.css'

function AuthMenu() {
	return (
		<ul className="auth-menu">
			<li>
				<Link to='/signup' className='link auth-menu__link auth-menu__link_type_sign-up'>Регистрация</Link>
			</li>
			<li>
				<Link to='/signin' className='link auth-menu__link auth-menu__link_type_sign-in'>Войти</Link>
			</li>
		</ul>
	)
}

export default AuthMenu;