import './SearchForm.css';
import searchIcon from '../../images/search.svg';

function SearchForm() {
	return (
		<section className="search">
			<form name='search' className='search-form'>
				<input type="search" className='search-form__input' placeholder='Фильм'/>
				<button type='submit' className='search-form__submit-button'>
					<img src={searchIcon} alt="Поиск" className="search-form__submit-button-image" />
				</button>
				<div className="checkbox-container">
					<input type="checkbox" className="checkbox" id="shortFilmsFilter"/>
					<label htmlFor="shortFilmsFilter" className="checkbox-label"/>
					<p className="checkbox-text">Короткометражки</p>
				</div>
			</form>
		</section>
	);
}

export default SearchForm;