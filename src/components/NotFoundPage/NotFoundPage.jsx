import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
	const navigation = useNavigate();

	const handleGoBackClick = () => {
		navigation(-1);
	}

	return (
		<div className="not-found-page">
			<p className="not-found-page__error-code">404</p>
			<p className="not-found-page__error-text">Страница не найдена</p>
			<button
				className="not-found-page__button"
				type="button"
				onClick={handleGoBackClick}
			>
				Назад
			</button>
		</div>
	);
}

export default NotFoundPage;