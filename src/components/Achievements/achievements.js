import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Header from './header';
import AchievementsCard from './AchievementsCard';

class Achievements extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Achievements</title>
                </Helmet>

                <Header />
                <AchievementsCard />                
            </div>
        )
    }
}


export default Achievements;