import React from 'react';
import './OutlineButton.css';

const OutlineButton = ({ children, onClick, type = "button", ...props }) => {
    return (
        <button
            type={type}
            className="outline-button"
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default OutlineButton;