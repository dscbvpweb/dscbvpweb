import React, { Component } from 'react';
import './blogcard.css';
import image from '../../images/randomimage.png';

export default class Blogcards extends Component {
    render() {
        return (
            <div>
            <section>
            <div class="container">

                <div class="blog-card flex-disp">

                    <img class="blog-image" src={image} alt="RandomImage" />

                    <div class="blog-text">
                        <span class="tags Sunflower-font">
                            Workshop, Events
                        </span>
                        <span class="date Sunflower-font">
                            June 28, 2019
                        </span>
                        <h1 class="blog-title Sunflower-font">
                            Title
                        </h1>
                        <span class="blog-desc Sunflower-font">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue eu. Lacus sed turpis tincidunt id. Vitae semper quis lectus nulla at. Mattis vulputate enim nulla aliquet porttitor lacus...
                        </span>
                        <div class="blog-flex-disp py-4">
                            <span class="blog-author Sunflower-font">
                                ~ Shaurya Agarwal
                            </span>
                            <span class="separator"></span>
                            <button class="read-btn blog-read-btn">
                                <span class="read-text1">Read more</span>
                                <i class="fas fa-arrow-right arrow-icon1"></i>
                            </button>
                        </div>
                        
                    </div>
                    
                </div>

                <div class="blog-card flex-disp">

                         <img class="blog-image" src={image} alt="RandomImage" /> 
    
                        <div class="blog-text">
                            <span class="tags Sunflower-font">
                                Workshop, Events
                            </span>
                            <span class="date Sunflower-font">
                                June 28, 2019
                            </span>
                            <h1 class="blog-title Sunflower-font">
                                Title
                            </h1>
                            <span class="blog-desc Sunflower-font">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue eu. Lacus sed turpis tincidunt id. Vitae semper quis lectus nulla at. Mattis vulputate enim nulla aliquet porttitor lacus...
                            </span>
                            <div class="blog-flex-disp py-4">
                                <span class="blog-author Sunflower-font">
                                    ~ Shaurya Agarwal
                                </span>
                                <span class="separator"></span>
                                <button class="read-btn blog-read-btn">
                                    <span class="read-text1">Read more</span>
                                    <i class="fas fa-arrow-right arrow-icon1"></i>
                                </button>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                </section>
            </div>
        )
    }
}
