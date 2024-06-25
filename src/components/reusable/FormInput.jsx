import React from 'react';

const FormInput = React.forwardRef(({ inputLabel, labelFor, inputType, inputId, inputName, placeholderText, ariaLabelName, ...rest }, ref) => {
	return (
		<div className="mb-4">
			<label
				className="block text-lg text-primary-dark dark:text-primary-light mb-2"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				ref={ref}
				{...rest}
			/>
		</div>
	);
});

export default FormInput;
