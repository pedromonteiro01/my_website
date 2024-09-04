import React from 'react';
import './InputField.css';

const InputField = ({ label, required, ...props }) => {
    return (
        <div className="input-field-wrapper">
            <label className="input-field-label">
                {label} {required && <span className="input-field-required">*</span>}
            </label>
            <input
                type="text"
                className="input-field-input"
                required={required}
                {...props}
            />
        </div>
    );
};

export default InputField;