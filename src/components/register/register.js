import React, { Component } from 'react'
import './register.css';
import logo1 from '../../images/logo1.png';

export default class Register extends Component {
    render() {
        return (
            <div>
                 <div className="container">
        <div className="row justify-content-center">
            <div className="col-4 col-md-2">
                <img src={logo1} className="img-fluid" />
            </div>
        </div>
        <div className="row justify-content-center mt-2">
            <div className="col-12 col-md-8">
                <div className="card radius">
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                
                                <div className="col-6">
                                    <input type="text" className="form-control form-control-lg input-radius" placeholder="First Name" />
                                </div>

                                <div className="col-6 ml-auto">
                                        <input type="text" className="form-control form-control-lg input-radius" placeholder="Last Name" />
                                </div>

                            </div>

                            <select className="form-control form-control-lg mt-4 input-radius">
                                <option hidden>Branch</option>
                                <option>CSE (M)</option>
                                <option>CSE (E)</option>
                                <option>IT (M)</option>
                                <option>IT (E)</option>
                                <option>ECE</option>
                            </select>
                            
                            <input type="email" className="form-control form-control-lg mt-4 input-radius" placeholder="Email-ID" />

                            <input type="password" className="form-control form-control-lg input-radius mt-4" placeholder="Password" />
                            
                            <div className="form-row mt-4 justify-content-center">
                                <div className="col-10">
                                        <button type="submit" className="btn btn-lg btn-primary btn-block input-radius gradient">Register</button>
                                </div>

                            </div>
                            
                        </form>
                            
                            <div className="row">
                                <div className="col-11">
                                    <a href="">
                                        <h5 className="mt-2 go-login-btn">go to login</h5>
                                    </a>
                                </div>
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
