import './SavedMovies.css';
import movies from '../../utils/movies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
	const savedMovies = movies.filter(movie => movie.saved)
	return (
		<>
			<SearchForm />
			<MoviesCardList movies={savedMovies} />
		</>
	);
}

export default SavedMovies;