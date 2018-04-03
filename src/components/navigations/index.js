import React from 'react';
import { Link } from "react-router-dom";

const navLink = () => {
    return (
        <ul className="pagination pagination-lg">
            <li className="page-item disabled">
                <a className="page-link" href="#">Previous</a>
                {/* <Link className='page-link'>Previous</Link> */}
            </li>
            <li className="page-item">
                <Link className='page-link' to="/" >1</Link>
            </li>
            <li className="page-item">
                <Link className='page-link' to="/pages/2" >2</Link>
            </li>
            <li className="page-item">
                <Link className='page-link' to="/pages/3" >3</Link>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">Next</a>
            </li>
        </ul>
    )
}

export default navLink