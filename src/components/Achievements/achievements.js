import React, { Component } from 'react'
import Header from '../blog/header';
import achievementsCard from './achievementsCard';

class Blog extends Component {
    render() {
        return (
            <div>
            <Header />
            <achievementsCard />                
            </div>
        )
    }
}


export default Blog;