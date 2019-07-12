import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from './components/layout/navbar';
import Register from './components/register/register';
import Login from './components/login/login';
import RegisterPortal from './components/RegisterPortal/RegisterPortal';
import Blog from './components/blog/blog';
import NewEvent from './components/newEvent/newEvent';
import SideBar from './components/sideBar/sideBar';
import EventStats from './components/stats/eventStats';
import RSVP from './components/RSVPTemplate/RSVPTemplate'
import Achievements from './components/Achievements/Achievements'
import OSP from './components/OSP/OSP'


class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">
        <Helmet titleTemplate="DSC BVP - %s" defaultTitle="DSC BVP">
          <meta name="description" content="DSC BVP Official Website" />
        </Helmet>

        <Navbar />
        {/* <NewEvent></NewEvent> */}
        {/* <SideBar/> */}
        {/* <EventStats/> */}

        {/* private route */}
        <Route exact path="/registerportal" component={RegisterPortal} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/blogs" component={Blog} />
        <Route exact path="/RSVP/confirmed" component={RSVP} />
        <Route exact path="/achievements" component={Achievements} />
        <Route exact path="/osp" component={OSP} />
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
