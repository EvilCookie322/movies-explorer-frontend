import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Input from '../Input/Input';
import './Register.css';

function Register() {
	return (
		<section className="register">
			<h2 className="register__title">Добро пожаловать!</h2>
			<Form
				name="register"
				place="register"
				buttonText="Зарегистрироваться"
			>
				<Input
					type="text"
					name="name"
					place="sign"
					label="Имя"
					placeholder="Имя"
				/>
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
			<p className="register__suggestion">
				Уже зарегистрированы?
				<Link to="/signin" className="link register__link">Войти</Link>
			</p>
		</section>
	);
}

export default Register;