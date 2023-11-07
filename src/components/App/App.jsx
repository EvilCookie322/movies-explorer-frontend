import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useEffect, useState } from 'react';
import useResize from '../../utils/useResize';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MainApi } from '../../utils/MainApi';
import { MOVIES_API_URL } from '../../utils/const';


function App() {
	const [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth') || false);
	const [currentUser, setCurrentUser] = useState({});
	const [savedMovies, setSavedMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const windowWidth = useResize();
	const navigation = useNavigate();

	useEffect(() => {
		if (loggedIn) {
			setErrorMessage('');
			MainApi.getUserInformation()
				.then((userInformation) => {
					setCurrentUser({
						name: userInformation.name,
						email: userInformation.email,
					});
				})
				.catch((error) => {
					console.log(error);
					setErrorMessage('Произошла ошибка при получении данных пользователя');
				})
		}
	}, [loggedIn])

	useEffect(() => {
		if (loggedIn) {
			setErrorMessage('');
			setIsLoading(true);
			MainApi.getSavedMovies()
				.then((savedMovies) => {
					setSavedMovies(savedMovies.reverse());
				})
				.catch((error) => {
					console.log(error);
					setErrorMessage('Произошла ошибка при получении сохраненных карточек');
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [loggedIn])

	function handleAuthorize({ email, password }) {
		setErrorMessage('');
		setIsLoading(true);
		MainApi.login({ email, password })
			.then((token) => {
				setLoggedIn(true);
				localStorage.setItem('auth', true);
				navigation('/movies');
			})
			.catch((error) => {
				console.log(error);
				setErrorMessage('Произошла ошибка при авторизации');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	function handleRegistration({ name, email, password }) {
		setErrorMessage('');
		setIsLoading(true);
		MainApi.register({ name, email, password })
			.then((user) => {
				handleAuthorize({ email, password });
			})
			.catch((error) => {
				console.log(error);
				setErrorMessage('Произошла ошибка при регистрации');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	function handleSaveMovie({
		country,
		director,
		duration,
		year,
		description,
		image,
		trailerLink,
		id,
		nameRU,
		nameEN,
	}) {
		const movie = {
			country: country,
			director: director,
			duration: duration,
			year: year,
			description: description,
			image: `${MOVIES_API_URL}${image.url}`,
			trailerLink: trailerLink,
			thumbnail: `${MOVIES_API_URL}${image.formats.thumbnail.url}`,
			movieId: id,
			nameRU: nameRU,
			nameEN: nameEN
		}
		MainApi.saveMovie(movie)
			.then((savedMovie) => {
				setSavedMovies([savedMovie, ...savedMovies])
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function handleDeleteMovie(movie) {
		const { _id } = savedMovies.find(el => el.nameRU === movie.nameRU);
		MainApi.deleteSavedMovie(_id)
			.then(() => {
				setSavedMovies((savedMovies) => savedMovies.filter(el => el._id !== _id))
			})
			.catch((error) => console.log(error));
	}

	function handleUpdateUser(user) {
		setIsLoading(true);
		setErrorMessage('');
		return MainApi.updateUserInformation(user)
			.then((user) => {
				setCurrentUser({
					name: user.name,
					email: user.email,
				});
				return true;
			})
			.catch((error) => {
				console.log(error);
				setErrorMessage('Произошла ошибка при обновлении профиля');
				return false;
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	function handleLogout() {
		MainApi.signOut()
			.then(() => {
				setLoggedIn(false);
				localStorage.clear();
				setCurrentUser({});
				setSavedMovies({});
			})
			.catch((error) => {
				console.log(error);
			})
	}
	
	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page__container">
				<Header loggedIn={loggedIn}/>
				<main className='content'>
					<Routes>
						<Route path="/" Component={Main}/>
						<Route path="*" Component={NotFoundPage}/>
						<Route
							path="/movies"
							element= {
								<ProtectedRoute
									loggedIn={loggedIn}
								>
									<Movies
										isLoading={isLoading}
										setIsLoading={setIsLoading}
										savedMovies={savedMovies}
										onSaveMovie={handleSaveMovie}
										onDeleteMovie={handleDeleteMovie}
										windowWidth={windowWidth}
										errorMessage={errorMessage}
										setErrorMessage={setErrorMessage}
									/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/saved-movies"
							element= {
								<ProtectedRoute
									loggedIn={loggedIn}
								>
									<SavedMovies
										isLoading={isLoading}
										savedMovies={savedMovies}
										onDeleteMovie={handleDeleteMovie}
										windowWidth={windowWidth}
									/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/profile"
							element= {
								<ProtectedRoute
									loggedIn={loggedIn}
								>
									<Profile
										isLoading={isLoading}
										onSubmit={handleUpdateUser}
										onLogout={handleLogout}
										errorMessage={errorMessage}
										setErrorMessage={setErrorMessage}
									/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/signin"
							element={
								<Login
									isLoading={isLoading}
									onSubmit={handleAuthorize}
									errorMessage={errorMessage}
									setErrorMessage={setErrorMessage}
								/>
							}
						/>
						<Route
							path="/signup"
							element={
								<Register
									isLoading={isLoading}
									onSubmit={handleRegistration}
									errorMessage={errorMessage}
								/>
							}
						/>
					</Routes>
				</main>
				<Footer />
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
