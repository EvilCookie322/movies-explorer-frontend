import './Input.css';

function Input({ type, name, place, label, value, placeholder }) {
	return (
		<div className={`input input_place_${place}`}>
			<label
				className={`input__label input__label_place_${place}`}
				htmlFor={name}
			>
				{label}
			</label>
			<input
				className={`input__input input__input_place_${place}`}
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				required
			/>
		</div>
	);
}

export default Input;