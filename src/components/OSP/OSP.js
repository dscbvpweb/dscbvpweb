import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../Achievements/header';
import OSPCards from './OSPCards';

class OSP extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>OSP</title>
                </Helmet>


                <Header />
                <OSPCards />                
            </div>
        )
    }
}


export default OSP;