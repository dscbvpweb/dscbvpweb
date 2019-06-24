import React, { Component } from 'react'
import './addform.css';

class Addform extends Component { 
    render() {
        return (
            <div className="card container mt-4 ">
                <div>
                <form>
                <div className="head mt-4"><h2>Add Student</h2></div>
                <div className="row">
                <div className="form-group  col-lg-6  ">
                    <input type="text" placeholder="Name" className="form-control " id="usr" />
                </div>
                <div className="form-group col-lg-6  ">
                    <input type="text" className="form-control" id="phn" placeholder="Phone no."/>
                </div>
                <div className="form-group col-lg-6  ">
                    <select className="form-control" id="day">
                        <option defaultValue>Batch</option>
                        <option value="0">CSE (M)</option>
                        <option value="1">CSE (E)</option>
                        <option value="2">IT (M)</option>
                        <option value="3">IT(E)</option>
                        <option value="4">ECE (M)</option>
                        <option value="5">ECE (E)</option>
                        <option value="6">EEE (M)</option>
                        <option value="7">EEE (E)</option>
                        <option value="8">ICE (M)</option>
                        <option value="9">ICE (E)</option>
                        <option value="10">OTHERS (BCA,MCA)</option>
                    </select>
                </div>
                
                <div className="form-group col-lg-6  ">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                </div>
                <button type="submit" class="btn btn-primary float-right mb-4 cb">Submit</button>
                </form>
                </div>
            </div>
        )
    }
}


export default  Addform;