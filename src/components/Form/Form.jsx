import './Form.css';

function Form({ children, name, place, buttonText, onSubmit, isValid, errorMessage }) {
	return (
		<form
			className="form"
			name={name}
			onSubmit={onSubmit}
			noValidate
		>
			{children}
			<span className={`form__error form__error_place_${place}`}>{errorMessage}</span>
			<button
				className={`form__submit-button form__submit-button_place_${place}`}
				type="submit"
				disabled={!isValid}
			>
				{buttonText}
			</button>
		</form>
	);
}

export default Form;