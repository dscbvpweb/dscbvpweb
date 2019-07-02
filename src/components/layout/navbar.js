import React, { Component } from 'react';
import './navbar.css';
import hamburger from '../../images/Hamburger.svg';
import dsc from '../../images/DSC logo.svg';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                    <nav class="navbar navbar-expand-sm navbar-class">              
                        
                        <span class="logo-container">
                            <img class="logo-image" src={dsc} alt="DSC Logo" />
                            <span class="logo-text">DSC BVP</span>
                        </span>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon">
                                <img class="hamburger" src={hamburger} alt="Hamburger" />
                            </span>
                        </button>
                        
                        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul class="nav">
                                <li class="nav-item">
                                        <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                        <a class="nav-link" href="#">Team</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Achievements</a>
                                </li>
                            </ul>
                        </div>
                    
                    </nav>                
            </div>
        )
    }
}
