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
// =======
// import TeamPage from './components/teamPage/teamPage';

// function App() {
//   return (
//     <div className="App">
//       <TeamPage/>
//       {/* <RegisterPortal/> */}
//     </div>
//   );
// >>>>>>> f624d3e78a89c83492379f748296bc1a3f2e8ad2
// }

export default App;
