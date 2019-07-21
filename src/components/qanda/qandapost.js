import React, { Component } from 'react';
import QandaSidebar from './qnadasidebar';

class QandaPost extends Component {
    render() {
        return (
            <React.Fragment>
                <QandaSidebar/>
                <div className="container mt-5 py-5 fit">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Optional" />

                        </div>
                        <div class="form-group">
                            <label for="question">Question</label>
                            <textarea type="text" className="form-control" id="question" placeholder="" />
                        </div>
                        <div class="form-group">
                            <label for="topic">Topic</label>
                            <select id="topic" className="form-control">
                                <option selected>General</option>
                                <option>Android</option>
                                <option>ML</option>
                                <option>Web Dev</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="" className="btn btn-secondary btn-block w-25 mr-2" style={{borderRadius:"25px"}}>Cancel</button>
                            <button type="" className="btn btn-warning btn-large  btn-block w-25 mt-0" style={{borderRadius:"25px"}}>Ask</button>
            
                        </div>
                    </form>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default QandaPost;
