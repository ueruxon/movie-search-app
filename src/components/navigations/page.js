import React from 'react';
import { Link } from "react-router-dom";

const Page = ({ href, page, activePage = "", disabled = "" }) => {
    return (
        <li className={`page-item ${disabled}`}>
            <Link className={`page-link ${activePage}`} to={href} >{page}</Link>
        </li>
    )
}

export default Page;