import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
	const navigation = useNavigate();

	const handleGoBackClick = () => {
		navigation(-1);
	}

	return (
		<section className="not-found-page">
			<h2 className="not-found-page__error-code">404</h2>
			<p className="not-found-page__error-text">Страница не найдена</p>
			<button
				className="not-found-page__button"
				type="button"
				onClick={handleGoBackClick}
			>
				Назад
			</button>
		</section>
	);
}

export default NotFoundPage;