import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    // const darkModeButtonStyle = {
    //     backgroundColor: "grey",
    //     color: "black",
    //     borderColor: "white"
    // }
    // const lightModeButtonStyle = {
    //     backgroundColor: "black",
    //     color: "black",
    //     borderColor: "white"
    // }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === true ? "dark" : "light"} bg-${props.mode === true ? "dark" : "light"}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href={props.react_link} target="_blank" rel="noreferrer">React Doc</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href='/'><b>{props.user}</b></a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.darkMode} id="flexSwitchCheckDefault" style={props.mode === true? {backgroundColor: "grey", color: "black", borderColor: "white"}: {backgroundColor: "grey", color: "black", borderColor: "white"}}/>
                        <label className={`form-check-label text-${props.mode === true ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">{props.mode === true ? "Enable Light Mode" : "Enable Dark Mode"}</label>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 mx-4" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: 'Navbar',
    user: 'Guest User',
};
