import React, { Component } from 'react'
import './RegisterPortal.css';
import Addform from './addform';

export default class RegisterPortal extends Component {
    render() {

        const style={
            width:'100%'
          };

        return (                    
            <div className="container">

                <Addform />
                <div className="cards">
                    <div className="row">
                         
                        <div className="col-lg-4 col-sm-6 col-xs-12 mt-3 ">
                            <div className="card1">
                                <div className="cbody">
                                    <div className="left">
                                    <h5 className="name"> <span><strong>1. </strong></span>Student Name</h5>
                                    <h6 className="email text-muted">email_id@gmail.com</h6>
                                    </div>
                                    <div className="right">
                                    <p className="batch">CSE (E)</p>
                                    <p className="phone">9876543210 </p>
                                    </div>
                                </div>
                            </div>
                        </div>  

                         
                        <div className="col-lg-4 col-sm-6 col-xs-12 mt-3 ">
                            <div className="card1">
                                <div className="cbody">
                                    <div className="left">
                                    <h5 className="name"> <span><strong>1. </strong></span>Student Name</h5>
                                    <h6 className="email text-muted">email_id@gmail.com</h6>
                                    </div>
                                    <div className="right">
                                    <p className="batch">CSE (E)</p>
                                    <p className="phone">9876543210 </p>
                                    </div>
                                </div>
                            </div>
                        </div>  

                         
                        <div className="col-lg-4 col-sm-6 col-xs-12 mt-3 ">
                            <div className="card1">
                                <div className="cbody">
                                    <div className="left">
                                    <h5 className="name"> <span><strong>1. </strong></span>Student Name</h5>
                                    <h6 className="email text-muted">email_id@gmail.com</h6>
                                    </div>
                                    <div className="right">
                                    <p className="batch">CSE (E)</p>
                                    <p className="phone">9876543210 </p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                         
                        <div className="col-lg-4 col-sm-6 col-xs-12 mt-3 ">
                            <div className="card1">
                                <div className="cbody">
                                    <div className="left">
                                    <h5 className="name"> <span><strong>1. </strong></span>Student Name</h5>
                                    <h6 className="email text-muted">email_id@gmail.com</h6>
                                    </div>
                                    <div className="right">
                                    <p className="batch">CSE (E)</p>
                                    <p className="phone">9876543210 </p>
                                    </div>
                                </div>
                            </div>
                        </div>              
                    </div>
                </div>

            </div>
        )
    }
}
