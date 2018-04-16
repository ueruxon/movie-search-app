import React from 'react';
import { Link } from "react-router-dom";

const profile = () => {
    return (
        <div className="profile">
            <Link to="/profile">Личный кабинет</Link>
        </div>
    )
}

export default profile;