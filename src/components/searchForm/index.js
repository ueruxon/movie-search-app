import React from 'react';

const searchForm = ({ handleChange }) => {
    return (
        <div className="input-group input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">Поиск</span>
            </div>
            <input type="text" className="form-control" onChange={(event) => handleChange(event.target.value)} />
        </div>
    )
}

export default searchForm;