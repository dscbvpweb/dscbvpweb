import React from 'react'
import './styles.css'
// import { DSClogo } from '../../SVG Icons/DSC logo.svg'
// import { RSVPimage } from '../../SVG Icons/RSVP side image.svg'


function RSVP(){
    return(
        <div>
            <div className="container flex-disp">
                <div className="left">
                    <div className="rsvp">
                        RSVP
                    </div>
                    <div className="when">
                        <div className="date">
                            2nd Aug' 19
                        </div>
                        <div className="time">
                            2:30 PM
                        </div>
                    </div>
                    <div className="where">
                        <div className="name">
                            DSC BVP Orientation
                        </div>
                        <div className="venue">
                            Auditorium
                        </div>
                    </div>
                    <div className="logo">
                        <img id="dsclogo" src="" alt="DSC Logo" />
                        <span id="dsc">DSC BVP</span>
                    </div>
                </div>
                <div className="right">
                    <img className="image" src="" alt="side Image" />
                </div>
            </div>
        </div>

    )
}

export default RSVP