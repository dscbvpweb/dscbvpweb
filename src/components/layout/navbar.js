import React, { Component } from 'react';
import './navbar.css';
import hamburger from '../../images/Hamburger.svg';
import dsc from '../../images/DSC logo.svg';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-sm navbar-class">              
                        
                        <span className="logo-container">
                            <img className="logo-image" src={dsc} alt="DSC Logo" />
                            <span className="logo-text">DSC BVP</span>
                        </span>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon">
                                <img className="hamburger" src={hamburger} alt="Hamburger" />
                            </span>
                        </button>
                        
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul className="nav">
                                <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link" href="#">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Achievements</a>
                                </li>
                            </ul>
                        </div>
                    
                    </nav>                
            </div>
        )
    }
}
