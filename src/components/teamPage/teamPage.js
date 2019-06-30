import React, { Component } from 'react';
import Items from './Items';
import './teamPage.css';

class TeamPage extends Component {
    state = {
        item1: [
            { id: 0, src: "/assets/1.jpg" },
            { id: 1, src: "/assets/1.jpg" },
            { id: 2, src: "/assets/1.jpg" }

        ],
        item2: [
            { id: 3, src: "/assets/2.jpg" },
            { id: 4, src: "/assets/1.jpg" },
            { id: 5, src: "/assets/a.jpg" }
        ],
        item3: [
            { id: 6, src: "/assets/a.jpg" },
            { id: 7, src: "/assets/1.jpg" },
            { id: 8, src: "/assets/2.jpg" }
        ],
        teamDescription: [
            {
                id: 0,
                name: "Creative Team",
                description: "Being part of a creative duo is an amazing place to be, whether you already have your team mate and are raring to go, or whether you are just exploring different directions for your creative career – our creative and design team can help.",
                member1: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
                member2: null
            },
            {
                id: 1,
                name: "Web Team",
                description: " an amazing place to berent directions for your creative career – our creative and design team can help.",
                member1: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
                member2: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"]
            },
            {
                id: 2,
                name: "Tech Team",
                description: "Being part of a creative duo is an amazing place to be, whether you already have your team mate and are raring to go, or whether you are just exploring different directions for your creative career – our creative and design team can help.",
                member1: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
                member2: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"]
            },
            {
                id: 3,
                name: "Creative Team",
                description: "Being part of a creative duo is an amazing place to be, whether you already have your team mate and are raring to go, or whether you are just exploring different directions for your creative career – our creative and design team can help.",
                member1: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
                member2: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"]
            },
            {
                id: 4,
                name: "Creative Team",
                description: "Being part of a creative duo is an amazing place to be, whether you already have your team mate and are raring to go, or whether you are just exploring different directions for your creative career – our creative and design team can help.",
                member1: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
                member2: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"]
            },
            {
                id: 5,
                name: "Creative Team",
                description: "Being part of a creative duo is an amazing place to be, whether you already have your team mate and are raring to go, or whether you are just exploring different directions for your creative career – our creative and design team can help.",
                member1: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
                member2: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"]
            },
            {
                id: 6,
                name: "Creative Team",
                description: "Being part of a creative duo is an amazing place to be, whether you already have your team mate and are raring to go, or whether you are just exploring different directions for your creative career – our creative and design team can help.",
                member1: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
                member2: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"]
            },
            {
                id: 7,
                name: "Creative Team",
                description: "Being part of a creative duo is an amazing place to be, whether you already have your team mate and are raring to go, or whether you are just exploring different directions for your creative career – our creative and design team can help.",
                member1: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
                member2: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"]
            },
            {
                id: 8,
                name: "Creative Team",
                description: "Being part of a creative duo is an amazing place to be, whether you already have your team mate and are raring to go, or whether you are just exploring different directions for your creative career – our creative and design team can help.",
                member1: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
                member2: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"]
            },
            {
                id: 9,
                name: "Creative Team",
                description: "Being part of a creative duo is an amazing place to be, whether you already have your team mate and are raring to go, or whether you are just exploring different directions for your creative career – our creative and design team can help.",
                member1: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
                member2: ["Ansh", "Vishal", "Vansh", "Sameer", "Varun"]
            },
        ],
        selectedid: 0,
        selectedname: "Creative Team",
        selecteddescription: "Being part of a creative duo is an amazing place to be, whether you already have your team mate and are raring to go, or whether you are just exploring different directions for your creative career – our creative and design team can help.",
        smember1:["Ansh", "Vishal", "Vansh", "Sameer", "Varun"],
        smember2:null

    }

    teamDisplay = (id) => {
        // console.log(id);
        const des = [...this.state.teamDescription];
        const arr = des.filter((item) => {
            return item.id === id;
        });
        // console.log(arr);
        this.setState({
            selectedid: arr[0].id,
            selectedname: arr[0].name,
            selecteddescription: arr[0].description,
            smember1:arr[0].member1,
            smember2:arr[0].member2
        });
       

    }
    render() {
        let members=null;
        if(this.state.smember2){
             members = <div className="col-lg-2 offset-1 mt-5">
            {this.state.smember2.map((member,index)=>
                            <h4 className="names" key={index}>{member}</h4>
                            )}
        </div>

        }

        // console.log(this.state.selectedname,this.state.smember2);

        return (
            <div className="container pt-5 teamback" style={{height:"100%"}}>
                <div className="row justify-content-center">
                    <h3 style={{ fontFamily: "'Raleway Dots', cursive", fontWeight: "bold" }}>
                        <span style={{ color: "#4285F4" }}>M</span>
                        <span style={{ color: "#DB4437" }}>e</span>
                        <span style={{ color: "#F4B400" }}>e</span>
                        <span style={{ color: "#4285F4" }}>t </span>
                        <span style={{ color: "#0F9D58" }}>O</span>
                        <span style={{ color: "#DB4437" }}>u</span>
                        <span style={{ color: "#4285F4" }}>r </span>
                        <span style={{ color: "#DB4437" }}>T</span>
                        <span style={{ color: "#F4B400" }}>e</span>
                        <span style={{ color: "#4285F4" }}>a</span>
                        <span style={{ color: "#0F9D58" }}>m</span>

                    </h3>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="carousel slide" id="pics" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#pics" data-slide-to="0" className="active"></li>
                                <li data-target="#pics" data-slide-to="1"></li>
                                <li data-target="#pics" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Items items={this.state.item1} display={this.teamDisplay}></Items>
                                </div>
                                <div className="carousel-item ">
                                    <Items items={this.state.item2} display={this.teamDisplay}></Items>
                                </div>
                                <div className="carousel-item">
                                    <Items items={this.state.item3} display={this.teamDisplay}></Items>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#pics" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#pics" role="button" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row rowheight align-items-center">
                    <div className="col-lg-6">
                        <h1>{this.state.selectedname}</h1>
                        <p>{this.state.selecteddescription}</p>
                    </div>
                    <div className="col-lg-2 offset-1 mt-5">
                        {this.state.smember1.map((member,index)=>
                            <h4 className="names" key={index}>{member}</h4>
                            )}
                    </div>
                    {members}

                    
                </div>

            </div>
        );
    }
}

export default TeamPage;