import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'
import { useEffect, useState } from 'react';
import { MAX_WIDTH, MED_WIDTH, MAX_MOVIE_NUM, MED_MOVIE_NUM, MIN_MOVIE_NUM, MAX_ADD_NUM, MED_ADD_NUM, MIN_ADD_NUM } from '../../utils/const';
import { useLocation } from 'react-router-dom';

function MoviesCardList({
	movies,
	windowWidth,
	onSaveMovie,
	onDeleteMovie,
	savedMovies,
	errorMessage,
}) {
	const [movieList, setMovieList] = useState([]);
	const [movieListParams, setMovieListParams] = useState({
		movieNum: MAX_MOVIE_NUM,
		addNum: MAX_ADD_NUM
	})
	const isPageSavedMovies = useLocation().pathname === '/saved-movies';
	function handleButtonMoreClick() {
		const addMovies = movies.slice(
				movieList.length,
				movieList.length + movieListParams.addNum
		);
		setMovieList([...movieList, ...addMovies])
	}
	
	useEffect(() => {
		if (windowWidth >= MAX_WIDTH)
			setMovieListParams({ movieNum: MAX_MOVIE_NUM, addNum: MAX_ADD_NUM });
		if (windowWidth > MED_WIDTH && windowWidth < MAX_WIDTH)
			setMovieListParams({ movieNum: MED_MOVIE_NUM, addNum: MED_ADD_NUM });
		if (windowWidth <= MED_WIDTH)
			setMovieListParams({ movieNum: MIN_MOVIE_NUM, addNum: MIN_ADD_NUM });
	}, [windowWidth])

	useEffect(() => {
		if (movies) {
			setMovieList(movies.filter((el, index) => index < movieListParams.movieNum));
		}
	}, [movies, movieListParams.movieNum])

	const isNothingToShowMovies = !!localStorage.getItem('movies') && !movieList.length && !isPageSavedMovies;
	const isNothingToShowSavedMovies = isPageSavedMovies && savedMovies.length && !movieList.length;

	return (
		<section className="movies-card-list">
			<ul className="movies-card-list__list">
				{movieList
					.map((movie) => (
						<MoviesCard
							movie={movie}
							key={movie.id || movie._id}
							onSaveMovie={onSaveMovie}
							onDeleteMovie={onDeleteMovie}
							savedMovies={savedMovies}
						/>
					))
				}
				<li className=
					{`movies-card-list__empty${
						// !!movies.length && movieList.length < 1 && !isPageSavedMovies ?
						errorMessage || isNothingToShowMovies ?
						' movies-card-list__empty_visible'
						:
						// isPageSavedMovies && savedMovies.length !== movies.length ?
						isNothingToShowSavedMovies ?
						' movies-card-list__empty_visible'
						:
						''
					}`}>
					{errorMessage ?
						'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
						:
						'Ничего не найдено'
					}
				</li>
			</ul>
			<button
				type="button"
				onClick={handleButtonMoreClick}
				className={
					`movies-card-list__button-more${(movies.length <= movieList.length) || isPageSavedMovies ? " movies-card-list__button-more_unvisible" : ""}`
				}
			>Ещё</button>
		</section>
	);
}

export default MoviesCardList;