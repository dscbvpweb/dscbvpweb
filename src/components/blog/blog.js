import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Header from './header';
import Blogcards from './blogcards';

class Blog extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Blogs</title>
                </Helmet>
                
                <Header />
                <Blogcards />                
            </div>
        )
    }
}


export default Blog;