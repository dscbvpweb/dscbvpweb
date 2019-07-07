import React, { Component } from 'react'
import Header from '../Achievements/header';
import OSPCards from './OSPCards';

class OSP extends Component {
    render() {
        return (
            <div>
            <Header />
            <OSPCards />                
            </div>
        )
    }
}


export default OSP;