import React, { Component } from 'react'
import './styles.css';
import axios from 'axios'


export default class OSPCards extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoaded: false,
            result: {}
        }
    }
    
    getData(){
        const repos = axios.get('https://api.github.com/users/DSC-BVP/repos').then( response => {
            console.log(response.data)
            this.setState({
                isLoaded: true,
                result: response.data
            })
            console.log(this.state.result)
        })
    }

    componentDidMount(){
        this.getData()
    }

    render(){
        const { isLoaded, result} = this.state;
        return(
            <div>
                <section>
                    <div className="container">

                       { Object.keys(result).map((key, index) => (
                            <div className="card flex-disp" key={result[key.id]}>
                                    
                                <div className="top flex-disp">
                                    <div className="left">
                                        {result[key].name}
                                    </div>                   
                                    <div className="right">
                                        {result[key].name}
                                    </div>                             
                                </div>
                                <div className="bottom">
                                    {result[key].description}
                                </div>
                            
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )
    }
}