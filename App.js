import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Footer from './Footer';
import NavBar from './OriNavbar/NavBar';
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom';


function App() {
  return (
  <Router>
    <NavBar/>
    <Switch>
    <Route exact path='/' component={Footer}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/Home' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/SignUp' component={SignUp}/>
    </Switch>
  </Router>  
  )
}

export default App
