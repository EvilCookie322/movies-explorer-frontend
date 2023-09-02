import './SearchForm.css';
import searchIcon from '../../images/search.svg';
import useFormWithValidation from '../../utils/useFormWithValidation';
import { useEffect } from 'react';

function SearchForm({
	onSubmit,
	onChangeCheckbox,
	isChecked,
	request,
	isLoading
}) {

	const { values, setValues, handleChange, isValid, setIsValid } = useFormWithValidation();

	useEffect(() => {
		if (request) {
			setValues({ search: request });
			setIsValid(true);
		}
	}, [request])

	function handleSearchSubmit(e) {
		e.preventDefault();
		onSubmit(values.search)
	}

	return (
		<section className="search">
			<form
				name='search'
				onSubmit={handleSearchSubmit}
				noValidate
				className='search-form'
			>
				<input
					type='search'
					name='search'
					onChange={handleChange}
					className='search-form__input'
					placeholder='Фильм'
					value={values.search || ''}
					required
				/>
				<button
					type='submit'
					className={`search-form__submit-button${!isValid ? ' search-form__submit-button_disabled' : ''}`}
					disabled={!isValid || isLoading}
				>
					<img src={searchIcon} alt="Поиск" className="search-form__submit-button-image" />
				</button>
				<span className="search-form__error">Необходимов ввести ключевое слово</span>
				<div className="checkbox-container">
					<input
						type="checkbox"
						onChange={onChangeCheckbox}
						checked={isChecked}
						className="checkbox"
						id="shortFilmsFilter"
					/>
					<label htmlFor="shortFilmsFilter" className="checkbox-label"/>
					<p className="checkbox-text">Короткометражки</p>
				</div>
			</form>
		</section>
	);
}

export default SearchForm;