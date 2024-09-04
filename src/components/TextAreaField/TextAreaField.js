import './TextAreaField.css';

const TextAreaField = ({ label, required, ...props }) => {
    return (
        <div className="textarea-field-wrapper">
            <label className="textarea-field-label">
                {label} {required && <span className="textarea-field-required">*</span>}
            </label>
            <textarea
                className="textarea-field-textarea"
                required={required}
                {...props}
            ></textarea>
        </div>
    );
};


export default TextAreaField;