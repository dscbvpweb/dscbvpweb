import React from 'react';
import SideBar from '../sideBar/sideBar'
import './eventStats.css';

const events = [
    { id: 1, name: "Actions on Google", venue: "Library", time: "10:00AM", date: "1 Aug'19" },
    { id: 2, name: "Firebase", venue: "Library", time: "10:00AM", date: "21 Aug'19" },
    { id: 3, name: "Arduino Day", venue: "Library", time: "10:00AM", date: "14 Aug'19" },
    { id: 4, name: "Git", venue: "Library", time: "10:00AM", date: "1 Aug'19" },
]

const colors=["rbgrad","ybgrad","bggrad","rograd"];
let color = "";

const eventStats = () => {
    return (
        <React.Fragment>
            <SideBar />
            <div className="container mt-5 fit">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        {events.map(event => {
                            
                            color = colors[event.id%4];

                            return (
                                <div className={"card mt-5 ".concat(color)} key={event.id}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6 align-self-center">
                                                <h3>{event.name}</h3>
                                            </div>
                                            <div className="col-6">
                                                <div className="row mt-2">
                                                    <div className="col-12 col-md-6">
                                                        <h4>{event.time}</h4>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <h4>{event.date}</h4>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-12">
                                                        <h4>Venue:{event.venue}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>


    );
}

export default eventStats;

