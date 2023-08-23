import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import movies from '../../utils/movies';
import Preloader from '../Preloader/Preloader';

function Movies() {
	const isLoading = false;
	return (
		<>
			<SearchForm />
			{isLoading ?
				<Preloader/>
				:
				<MoviesCardList movies={movies}/>
			}
		</>
	);
}

export default Movies;