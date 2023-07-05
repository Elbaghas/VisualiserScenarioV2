import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {

    let { user1, logoutUser } = useContext(AuthContext)
    let user = false;
    return (
        <div>
            {user ? (
                <p onClick={logoutUser}>Logout</p>
            ) : (
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <div className="navbar-brand">
                            <img src="img/topics/logo sans arriere inverse.png" className="img-fluid logo-image img1" alt="Logo de l'entreprise" />
                        </div>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-lg-4 me-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="index.html">Accueil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="#section_2">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="#section_3">Scénarios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="#section_4">Activités</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="#section_5">Evaluation</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link click-scroll " to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-lg-4 me-lg-auto">
                                <li className="nav-item">
                                    <Link className="nav-link click-scroll text-sm" to="/login">SeConnecter</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link click-scroll text-sm" to="/register">S’inscrire</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            )}

            {user && <p>Hello  madame {user.name}</p>}

        </div>
    )
}

export default Header