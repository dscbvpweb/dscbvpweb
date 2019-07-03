import React, { Component } from 'react'
import logo1 from '../../images/logo1.png';
import styled from 'styled-components';

export default class Login extends Component {
   
    render() {
        const StyledH = styled.h1`
        font-size: 30px;
        color: grey;
        /* color: #3FC6D0; */
        text-align: center;
        `
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 col-md-2">
                            <img src={logo1} className="img-fluid" alt="logo"/>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <div className="col-12 col-md-8">
                            <div className="card radius">
                                <div className="card-body">
                                <StyledH>Sign In</StyledH>

                                    <form>
                                        <input type="email" className="form-control form-control-lg mt-4 input-radius" placeholder="Email-ID" />

                                        <input type="password" className="form-control form-control-lg input-radius mt-4" placeholder="Password" />
                                        
                                        <div className="form-row mt-4 justify-content-center">
                                            <div className="col-10">
                                                    <button type="submit" className="btn btn-lg btn-primary btn-block input-radius gradient">Login</button>
                                            </div>

                                        </div>
                                        
                                    </form>
                                        
                                        <div className="row">
                                            <div className="col-11">
                                                <a href="/register">
                                                    <h5 className="mt-2 go-login-btn">register</h5>
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
