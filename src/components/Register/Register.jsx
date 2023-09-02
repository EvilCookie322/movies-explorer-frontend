import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Input from '../Input/Input';
import './Register.css';
import useFormWithValidation from '../../utils/useFormWithValidation';
import { EMAIL_REGEX, NAME_REGEX } from '../../utils/const';

function Register({
	isLoading,
	onSubmit,
	errorMessage
}) {
	const { values, handleChange, isValid } = useFormWithValidation();

	function handleRegistrationSubmit(e) {
		e.preventDefault();
		onSubmit(values);
	}

	return (
		<section className="register">
			<h2 className="register__title">Добро пожаловать!</h2>
			<Form
				name="register"
				place="register"
				buttonText={isLoading ? "Регистрация..." : "Зарегистрироваться"}
				onSubmit={handleRegistrationSubmit}
				isValid={!isLoading && isValid}
				errorMessage={errorMessage}
			>
				<Input
					type="text"
					name="name"
					place="sign"
					label="Имя"
					placeholder="Имя"
					onChange={handleChange}
					value={values.name || ''}
					pattern={NAME_REGEX}
					errorMessage={'Имя может содержать только латиницу, кириллицу, пробел или дефис'}
				/>
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
			<p className="register__suggestion">
				Уже зарегистрированы?
				<Link to="/signin" className="link register__link">Войти</Link>
			</p>
		</section>
	);
}

export default Register;