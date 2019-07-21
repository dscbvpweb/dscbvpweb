import React, { Component } from 'react'
import Header from './header';
import AchievementsCard from './achievementsCard';

class Achievements extends Component {
    render() {
        return (
            <div>
            <Header />
            <AchievementsCard />                
            </div>
        )
    }
}


export default Achievements;