import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import NavBar from './OriNavbar/NavBar';
import Upload from './Upload';

import {BrowserRouter as Router,Switch,Route} from  'react-router-dom';


function App() {
  return (
  <Router>
    <Switch>
    <Route path='/Upload' component={Upload}/>
    <Route path='/login' component={Login}/>
    <Route path='/SignUp' component={SignUp}/>
    <NavBar/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/Home' component={Home}/>
    
    </Switch>
  </Router>  
  )
}

export default App
