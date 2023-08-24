import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

function MoviesCardList(props) {
	const { movies } = props;
	return (
		<section className="movies-card-list">
			<ul className="movies-card-list__list">
				{movies.map((movie) => (
					<MoviesCard
						movie={movie}
						key={movie.id}
					/>
				))}
			</ul>
			<button
				type="button"
				className={
					`movies-card-list__button-more${(movies.length < 12) ? " movies-card-list__button-more_unvisible" : ""}`
				}
			>Ещё</button>
		</section>
	);
}

export default MoviesCardList;