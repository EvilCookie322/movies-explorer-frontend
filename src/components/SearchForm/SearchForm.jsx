import './SearchForm.css';
import searchIcon from '../../images/search.svg';

function SearchForm() {
	return (
		<section className="search">
			<form name='search' className='search-form'>
				<input type="search" className='search-form__input' placeholder='Фильм'/>
				<button type='submit' className='search-form__submit-button'>
					<img src={searchIcon} alt="Поиск" className="search-form__submit-button_image" />
				</button>
				<div className="checkbox__container">
					<input type="checkbox" className="checkbox" id="shortFilmsFilter"/>
					<label htmlFor="shortFilmsFilter" className="checkbox__label"/>
					<p className="checkbox__text">Короткометражки</p>
				</div>
			</form>
		</section>
	);
}

export default SearchForm;