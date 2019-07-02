import React, { Component } from 'react'
import Header from './header';
import Blogcards from './blogcards';

class Blog extends Component {
    render() {
        return (
            <div>
            <Header />
            <Blogcards />                
            </div>
        )
    }
}


export default Blog;