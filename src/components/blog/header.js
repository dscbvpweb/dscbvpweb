import React from 'react';
import styled from 'styled-components';
import dsc from '../../images/DSC logo.svg';
import './header.css';

const Styledheader = styled.div`
width: 100%;
height: 50vh;
background: #f1f1f1;
`

export const Header = () => {
    return (
        <header>
        <Styledheader>
            <span class="helper"></span>
            <img class="header-logo-image" src={dsc} alt="DSC Logo" />
            <div class="read-all">
                <button class="read-btn">
                    <span class="read-text">Read on Medium</span>
                    <i class="fas fa-arrow-right arrow-icon"></i>
                </button>
            </div>
        </Styledheader>
        </header>
    )
}

export default Header;