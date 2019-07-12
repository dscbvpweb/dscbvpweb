import React from 'react'
import { Helmet } from 'react-helmet'

import './styles.css'

function Page404(){
    return(
        <div className="wrapper">
            <Helmet>
                <title>404</title>
            </Helmet>
            
            <img src="images/DSClogo.svg"  className="logo" alt="logo" />
        
            <br/>
            <div className="flex-container">
                <div className="box one">404</div>
                <div className="box two">page not found</div>
            </div>

        </div>
    )
}

export default Page404;