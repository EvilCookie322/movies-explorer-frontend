import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Input from '../Input/Input';
import './Login.css';

function Login() {
	return (
		<section className="login">
			<h2 className="login__title">Рады видеть!</h2>
			<Form
				name="login"
				place="sign"
				buttonText="Войти"
			>
				<Input
					type="email"
					name="email"
					place="sign"
					label="E-mail"
					placeholder="E-mail"
				/>
				<Input
					type="password"
					name="password"
					place="sign"
					label="Пароль"
					placeholder="Пароль"
				/>
			</Form>
			<p className="login__suggestion">
				Ещё не зарегистрированы?
				<Link to="/signup" className="link login__link">Регистрация</Link>
			</p>
		</section>
	);
}

export default Login;