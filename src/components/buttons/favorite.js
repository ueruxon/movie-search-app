import React from 'react';

const button = ({ btnText, btnClass, id, handleClick, btnClassPos = ''}) => {
    return (
        <button type="button" onClick={() => handleClick(id)}
            className={`btn btn-outline-secondary ${btnClassPos} ${btnClass}`}>
            {btnText}
        </button>
    )
}

export default button;