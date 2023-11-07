import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import { MoviesApi } from '../../utils/MoviesApi';

function Movies({
		isLoading,
		setIsLoading,
		windowWidth,
		onSaveMovie,
		savedMovies,
		onDeleteMovie,
		errorMessage,
		setErrorMessage
	}) {
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [request, setRequest] = useState('');
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		const request = JSON.parse(localStorage.getItem('searchRequest'));
		const movies = JSON.parse(localStorage.getItem('movies'));
		if (movies) {
			const filteredResult = 
				filterMovies(JSON.parse(localStorage.getItem('movies')), request, isChecked);
			setFilteredMovies(filteredResult);
			localStorage.setItem('filteredMovies', JSON.stringify(filteredResult));
		}
	}, [isChecked, request])
	
	useEffect(() => {
		if (localStorage.getItem('filteredMovies')) {
			setFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies')));
			setRequest(JSON.parse(localStorage.getItem('searchRequest')));
			setIsChecked(JSON.parse(localStorage.getItem('isCheckboxChecked')));
		}
	}, [])
	

	function handleCheckboxClicked(e) {
		setIsChecked(e.target.checked);
		localStorage.setItem('isCheckboxChecked', JSON.stringify(!isChecked));
	}

	function filterMovies(movies, request, isChecked) {
		const nameFilteredMovies = movies.filter(el => el.nameRU.toLowerCase().includes(request.toLowerCase()) || el.nameEN.toLowerCase().includes(request.toLowerCase()));
		
		return isChecked ?
			nameFilteredMovies.filter(el => el.duration < 41)
			:
			nameFilteredMovies
	}

	function handleSearchSubmit(request) {
		localStorage.setItem('searchRequest', JSON.stringify(request));
		localStorage.setItem('isCheckboxChecked', JSON.stringify(isChecked));
		if (!localStorage.getItem('movies')) {
			setErrorMessage('');
			setIsLoading(true);
			MoviesApi.getMovies()
				.then((movies) => {
					localStorage.setItem('movies', JSON.stringify(movies));
					const filteredResult = filterMovies(JSON.parse(localStorage.getItem('movies')), request, isChecked);
					setFilteredMovies(filteredResult);
					localStorage.setItem('filteredMovies', JSON.stringify(filteredResult));
				})
				.catch(error => {
					console.log(error);
					setErrorMessage(`${error.status}`)
				})
				.finally(() => setIsLoading(false));
		} else {
			const filteredResult = filterMovies(JSON.parse(localStorage.getItem('movies')), request, isChecked);
			setFilteredMovies(filteredResult);
			localStorage.setItem('filteredMovies', JSON.stringify(filteredResult));
		}
	}

	return (
		<>
			<SearchForm 
				onSubmit={handleSearchSubmit}
				onChangeCheckbox={handleCheckboxClicked}
				isChecked={isChecked}
				request={request}
				isLoading={isLoading}
			/>
			{isLoading ?
				<Preloader/>
				:
				<MoviesCardList
					movies={filteredMovies}
					windowWidth={windowWidth}
					onSaveMovie={onSaveMovie}
					onDeleteMovie={onDeleteMovie}
					savedMovies={savedMovies}
					errorMessage={errorMessage}
				/>
			}
		</>
	);
}

export default Movies;