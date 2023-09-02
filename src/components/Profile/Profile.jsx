import Form from '../Form/Form';
import './Profile.css';
import Input from '../Input/Input';
import { useContext, useEffect } from 'react';
import useFormWithValidation from '../../utils/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { EMAIL_REGEX, NAME_REGEX } from '../../utils/const';

function Profile({ isLoading, onSubmit, onLogout, errorMessage }) {
	const currentUser = useContext(CurrentUserContext);
	const { values, setValues, handleChange, isValid } = useFormWithValidation();

	useEffect(() => {
		setValues({
			name: currentUser.name,
			email: currentUser.email,
		})
	}, [currentUser, setValues])

	function handleUpdateUser(e) {
		e.preventDefault();
		onSubmit(values);
	}

	const isValuesNotSame = (values.name !== currentUser.name || values.email !== currentUser.email);

	function handleLogout(e) {
		e.preventDefault();
		onLogout();
	}
	return (
		<section className="profile">
			<h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
			<Form
				name="profile"
				place="profile"
				buttonText={isLoading ? "Редактирование..." : "Редактировать"}
				onSubmit={handleUpdateUser}
				isValid={!isLoading && isValid && isValuesNotSame}
				errorMessage={errorMessage}
			>
				<Input
					type="text"
					name="name"
					place="profile"
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
					place="profile"
					label="E-mail"
					placeholder="E-mail"
					onChange={handleChange}
					value={values.email || ''}
					pattern={EMAIL_REGEX}
					errorMessage={'Данная почта некорректна'}
				/>
			</Form>
			<button className="profile__button" onClick={handleLogout} type="button">Выйти из аккаунта</button>
		</section>
	);
}

export default Profile