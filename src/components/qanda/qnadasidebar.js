import React from 'react';
import './qandasidebar.css';

const qandaSidebar =()=>{
    const sideBarToggle=()=>{
        document.getElementById("sidebarqanda").classList.toggle('active');
        
    }
    return(
        <div id="sidebarqanda">
            <div className="toggle-button" onClick={sideBarToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            
            
            <ul>
                <li><h4 className="mt-4">Home</h4></li>
                <li><h4>Topic</h4>
                    <ul className="pl-2">
                        <li>general</li>
                        <li>Web Dev</li>
                        <li>Android</li>
                        <li>ML</li>
                    </ul>
                </li>

            </ul>
        </div>    
    )
}

export default qandaSidebar;