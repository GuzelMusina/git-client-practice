import React from "react";
import './App.css';

const Select = ({id, isSelected, toggleSelectRepository}) => (
    <button
        type="button"
        onClick={() => toggleSelectRepository(id, isSelected)}
    >
        {isSelected ? 'Unselect' : 'Select'}
    </button>
);

export default Select;