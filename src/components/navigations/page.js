import React from 'react';
import { Link } from "react-router-dom";

const Page = ({ href, page, handleChange, activePage = "", disabled = "" }) => {
    return (
        <li className={`page-item ${disabled}`}>
            <Link className={`page-link ${activePage}`} to={href} onClick={() => handleChange(page)}>{page}</Link>
        </li>
    )
}

export default Page;