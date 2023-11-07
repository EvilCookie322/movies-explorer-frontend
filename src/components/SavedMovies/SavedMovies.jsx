import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ isLoading, savedMovies, windowWidth, onDeleteMovie }) {
	const [filteredMovies, setFilteredMovies] = useState(savedMovies);
	const [request, setRequest] = useState('');
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		if (savedMovies) {
			const filteredResult = filterMovies(savedMovies, request, isChecked);
			setFilteredMovies(filteredResult);
		}
	}, [savedMovies, request, isChecked])

	function handleCheckboxClicked(e) {
		setIsChecked(e.target.checked);
	}

	function filterMovies(movies, request, isChecked) {
		const nameFilteredMovies = movies.filter(el => el.nameRU.toLowerCase().includes(request.toLowerCase()) || el.nameEN.toLowerCase().includes(request.toLowerCase()));
		return isChecked ?
			nameFilteredMovies.filter(el => el.duration < 41)
			:
			nameFilteredMovies
	}

	function handleSearchSubmit(request) {
		setRequest(request);
	}

	return (
		<>
			<SearchForm
				onSubmit={handleSearchSubmit}
				onChangeCheckbox={handleCheckboxClicked}
				isChecked={isChecked}
				isLoading={isLoading}
			/>
			{isLoading ?
				<Preloader/>
				:
				<MoviesCardList
					isLoading={isLoading}
					movies={filteredMovies}
					savedMovies={savedMovies}
					windowWidth={windowWidth}
					onDeleteMovie={onDeleteMovie}
				/>
			}
		</>
	);
}

export default SavedMovies;