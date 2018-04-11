import React from 'react';
import { Link } from "react-router-dom";


const searchForm = ({ handleChange, reset }) => {
    return (
            <div className="nav-block">
            <Link to="/" className="nav-link" onClick={reset}>Movie-app</Link>
                <form>
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg">Поиск</span>
                        </div>
                        <input type="text" className="form-control" onChange={(event) => handleChange(event.target.value)} />
                    </div>
                </form>
            </div>
    )
}

export default searchForm;