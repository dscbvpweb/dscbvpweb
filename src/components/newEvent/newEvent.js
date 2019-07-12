import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

import SideBar from '../sideBar/sideBar';

class NewEvent extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>New Event</title>
                </Helmet>
            <React.Fragment>
                <SideBar/>

                <div className="content">
                    <div class="container mt-5">
                        <div class="row justify-content-center ml-lg-5">
                            <div class="col-12 col-md-8 ">
                                <form>
                                    <h1 class="display-3">New Event</h1>
                                    <div class="form-group mt-4">
                                        <label for="emailInput">Event Name</label>
                                        <input type="text" class="form-control input-radius" id="emailInput" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-5">
                                            <label for="inputDate">Date</label>
                                            <input type="date" class="form-control input-radius" id="inputDate" />
                                        </div>
                                        <div class="form-group col-5 offset-2">
                                            <label for="inputDate">Time</label>
                                            <input type="time" class="form-control input-radius" id="inputDate" />
                                        </div>
                                    </div>
                                    <div class="form-group mt-1">

                                        <label for="inputInterest">Interest Groups</label>
                                        <div class="form-row" id="inputInterest">
                                            <div class="col-5 col-md-3">
                                                <label class="btn btn-secondary btn-block radius checkbox-label">
                                                    <input type="checkbox" class="checkbox-btn" name="interest1" value="Ml" hidden />ML
                                            </label>
                                            </div>
                                            <div class="col-5 col-md-3">
                                                <label class="btn btn-secondary btn-block radius checkbox-label">
                                                    <input type="checkbox" class="checkbox-btn" name="interest2" value="Web" hidden /> Web
                                            </label>
                                            </div>
                                            <div class="col-5 col-md-3">
                                                <label class="btn btn-secondary btn-block radius checkbox-label">
                                                    <input type="checkbox" class="checkbox-btn" name="interest3" value="Android" hidden /> Android
                                            </label>
                                            </div>
                                            <div class="col-5 col-md-3">
                                                <label class="btn btn-secondary btn-block radius checkbox-label">
                                                    <input type="checkbox" class="checkbox-btn" name="interest4" value="CP" hidden />CP
                                            </label>
                                            </div>

                                        </div>
                                        <div class="form-group mt-1">
                                            <label for="notes">Additional Notes</label>
                                            <textarea class="form-control input-radius" id="notes" rows="4"></textarea>
                                        </div>
                                        <div class="form-row justify-content-end">
                                            <div class="col-3">
                                                <button type="submit" class="btn btn-block btn-primary radius text-dark input-radius"><b>Send Emails</b></button>
                                            </div>

                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
            </div>

        );
    }
}

export default NewEvent;