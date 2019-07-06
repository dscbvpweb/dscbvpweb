import React, {Component} from 'react';
import './sideBar.css';



class SideBar extends Component{
    sideBarToggle=()=>{
        document.getElementById("sidebar").classList.toggle('active');
        
    }
    render(){

        return(
            <div id="sidebar">
            <div className="toggle-button" onClick={this.sideBarToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <h2 className="ml-2 mt-5"><span><img src="/assets/dsclogo.svg" height="29px"></img></span>   DSC BVP</h2>
            <hr></hr>
            
            <ul>
                <li><h4>Events</h4></li>
                <li><h4>Add achievements</h4></li>
                <li><h4>Option</h4></li>
                <li><h4>Option</h4></li>
                <li><h4>Option</h4></li>
            </ul>
        </div>    
        )
    
    }
    
    
    
}
export default SideBar;