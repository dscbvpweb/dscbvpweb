import React, { Component } from 'react';
import './styles.css';

export default class AchievementsCard extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="container">

                        <div className="card flex-disp">

                            <div className="top flex-disp">
                                <div className="left">
                                    John Doe    
                                </div>                   
                                <div className="right">
                                    Achievement Title
                                </div>                             
                            </div>
                            <div className="bottom">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue eu. Lacus sed turpis tincidunt id. Vitae semper quis lectus nulla at. Mattis vulputate enim nulla aliquet porttitor lacus...
                            </div>
                            
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
