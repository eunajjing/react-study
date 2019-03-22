import React from 'react';
import './Buttons.css';

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onCreate}>생성</div>
            <div className="btn remove" onClick={onRemove}>제거</div>
        </div>
    );
}

export default Buttons;