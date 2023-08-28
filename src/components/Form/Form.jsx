import './Form.css';

function Form({ children, name, place, buttonText }) {
	return (
		<form
			className="form"
			name={name}
		>
			{children}
			<span className={`form__error form__error_place_${place}`}>Что-то пошло не так...</span>
			<button className={`form__submit-button form__submit-button_place_${place}`} type="submit">{buttonText}</button>
		</form>
	);
}

export default Form;