import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { MOVIES_API_URL } from '../../utils/const';

function MoviesCard({ movie, onSaveMovie, savedMovies, onDeleteMovie, isLoading }) {
	const location = useLocation();
	const isSavedMoviesPage = location.pathname === '/saved-movies';

	function handleSaveMovie(e) {
		e.preventDefault();
		onSaveMovie(movie);
	}

	function handleDeleteMovie(e) {
		e.preventDefault();
		onDeleteMovie(movie);
	}

	const isMovieSaved = savedMovies.some(el => el.nameRU === movie.nameRU);

	return (
		<li className="movie">
			<a
				href={movie.trailerLink}
				target='_blank'
				rel="noreferrer"
				className="link movie__link"
			>
				<img src={isSavedMoviesPage ? `${movie.image}` : `${MOVIES_API_URL}${movie.image.url}`} alt={movie.nameRU} className="movie__image" />
			</a>
			<div className="movie__info">
				<h2 className="movie__title">{movie.nameRU}</h2>
				<p className="movie__duration">{`${movie.duration} минут`}</p>
			</div>
			<button 
				className=
					{
						`movie__button
						movie__button_type_${isSavedMoviesPage ? "delete" : "save"}
						${(isMovieSaved && !isSavedMoviesPage) ?
								" movie__button_type_save_active"
								:
								""
						}`
					}
				type="button"
				onClick={isMovieSaved ? handleDeleteMovie : handleSaveMovie}
				disabled={isLoading}
			></button>
		</li>
	);
}

export default MoviesCard;