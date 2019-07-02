import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import RegisterPortal from './components/RegisterPortal/RegisterPortal';
import Register from './components/register/register';

class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">

        {/* private route */}
        <Route exact path="/registerportal" component={RegisterPortal} />
        <Route exact path="/register" component={Register} />

      </div>
      </Router>
    );
  }
}

export default App;
