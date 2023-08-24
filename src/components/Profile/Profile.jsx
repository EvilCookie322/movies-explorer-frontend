import Form from '../Form/Form';
import './Profile.css';
import Input from '../Input/Input';
import { useNavigate } from 'react-router-dom';

function Profile() {
	const navigation = useNavigate();
	const handleLogout = () => {
		navigation('/');
	}
	return (
		<section className="profile">
			<h2 className="profile__title">Привет, Виталий!</h2>
			<Form
				name="profile"
				place="profile"
				buttonText="Редактировать"
			>
				<Input
					type="text"
					name="name"
					place="profile"
					label="Имя"
					value="Александр"
					placeholder="Имя"
				/>
				<Input
					type="email"
					name="email"
					place="profile"
					label="E-mail"
					value="pochta@yandex.ru"
					placeholder="E-mail"
				/>
			</Form>
			<button className="profile__button" onClick={handleLogout} type="button">Выйти из аккаунта</button>
		</section>
	);
}

export default Profile