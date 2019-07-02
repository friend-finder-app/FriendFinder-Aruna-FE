import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import './App.css';
// import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import GetUserMatch from './components/GetUserMatch';

function App() {
  return (
    <Router>
      <div className="App">
        <h3>Friend Finder App</h3>
        <ul>
          <li><NavLink to='/signup'>Sign Up</NavLink></li>
          <li><NavLink to='/signin'>Sign In</NavLink></li>
        </ul>
        <PrivateRoute path='/' component={GetUserMatch} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  inUserPage: state.inUserPage,
})

export default connect(
  mapStateToProps
)(App)

