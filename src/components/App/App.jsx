import { Routes, Route } from "react-router-dom";
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

function App() {
	return (
		<div className="page__container">
			<Header />
			<main className='content'>
				<Routes>
					<Route path="/" Component={Main}/>
					<Route path="*" Component={NotFoundPage}/>
					<Route path="/movies" Component={Movies}/>
					<Route path="/saved-movies" Component={SavedMovies}/>
					<Route path="/profile" Component={Profile}/>
					<Route path="/signin" Component={Login}/>
					<Route path="/signup" Component={Register}/>
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
