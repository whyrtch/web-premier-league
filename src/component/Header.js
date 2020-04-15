import React from 'react';
import {Link} from "react-router-dom";

export default Header => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand text-white"><b>Premier League Clubs</b></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/about"} className="btn btn-link text-white nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}