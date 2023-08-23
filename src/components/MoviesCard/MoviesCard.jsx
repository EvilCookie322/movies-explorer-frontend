import { useLocation } from 'react-router-dom';
import './MoviesCard.css'

function MoviesCard({ movie }) {
	const location = useLocation();
	const isSavedMoviesPage = location.pathname === '/saved-movies';
	return (
		<li className="movie">
			<img src={movie.image} alt={movie.title} className="movie__image" />
			<div className="movie__info">
				<h2 className="movie__title">{movie.title}</h2>
				<p className="movie__duration">{movie.duration}</p>
			</div>
			<button 
				className=
					{
						`movie__button
						movie__button_type_${isSavedMoviesPage ? "delete" : "save"}
						${(movie.saved && !isSavedMoviesPage) ?
								" movie__button_type_save_active"
								:
								""
						}`
					}
				type="button"></button>
		</li>
	);
}

export default MoviesCard;