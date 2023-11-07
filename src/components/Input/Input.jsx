import './Input.css';

function Input({ type, name, place, label, value, placeholder, onChange, errorMessage, pattern }) {
	return (
		<div className={`input input_place_${place}`}>
			<label
				className={`input__label input__label_place_${place}`}
				htmlFor={`${place}_input_${name}`}
			>
				{label}
			</label>
			<input
				className={`input__input input__input_place_${place}`}
				type={type}
				name={name}
				id={`${place}_input_${name}`}
				minLength={type === 'password' || name === 'name' ? 2 : null}
				maxLength={type === 'password' ? 16 : name === 'name' ? 30 : null}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				pattern={pattern}
				required
			/>
			<span className="input__error">{errorMessage}</span>
		</div>
	);
}

export default Input;