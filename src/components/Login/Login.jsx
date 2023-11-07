import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Input from '../Input/Input';
import './Login.css';
import useFormWithValidation from '../../utils/useFormWithValidation';
import { EMAIL_REGEX } from '../../utils/const';
import { useEffect } from 'react';

function Login({
	isLoading,
	onSubmit,
	errorMessage,
	setErrorMessage
}) {
	const { values, handleChange, isValid } = useFormWithValidation();

	useEffect(() => {
		return () => {
			setErrorMessage('');
		}
	}, [])

	function handleLoginSubmit(e) {
		e.preventDefault();
		onSubmit(values);
	}

	return (
		<section className="login">
			<h2 className="login__title">Рады видеть!</h2>
			<Form
				name="login"
				place="sign"
				buttonText={isLoading ? "Вход..." : "Войти"}
				onSubmit={handleLoginSubmit}
				isValid={!isLoading && isValid}
				errorMessage={errorMessage}
			>
				<Input
					type="email"
					name="email"
					place="sign"
					label="E-mail"
					placeholder="E-mail"
					onChange={handleChange}
					value={values.email || ''}
					pattern={EMAIL_REGEX}
					errorMessage={'Данная почта некорректна'}
				/>
				<Input
					type="password"
					name="password"
					place="sign"
					label="Пароль"
					placeholder="Пароль"
					onChange={handleChange}
					value={values.password || ''}
					errorMessage={'Длинна пароля должна быть от 2 до 16 символов'}
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