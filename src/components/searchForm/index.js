import React from 'react';
import { Link } from "react-router-dom";


const searchForm = ({ handleChange, reset, search, value }) => {
    return (
        <div className="container">
            <header className="nav-block">
                <Link to="/" className="nav-link" onClick={reset}>Movie-app</Link>
                <form onSubmit={(event) => search(event)}>
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Поиск</span>
                        </div>
                        <input type="text" className="form-control" 
                        onChange={(event) => handleChange(event.target.value)} 
                        value={value}/>
                    </div>
                </form>
            </header>
        </div>
    )
}

export default searchForm;