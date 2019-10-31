import React from 'react';
// import Layout from './components/Layout/Layout';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import NotFoundPage from '../src/components/NotFoundPage/NotFoundPage';
import Home from '../src/components/Home/Home'
import Login from '../src/components/Login/Login'
import Signup from '../src/components/SignUp/SignUp'
import ProfileAccount from '../src/components/Profile/Profile_account'
  

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/login" component = {Login} />
          <Route exact path = "/signup" component = {Signup} />
          <Route exact path = "/profile" component = {ProfileAccount} />
          <Route exact path = "/personal" component = {ProfileAccount} />
          <Route exact path = "/bank" component = {ProfileAccount} />
          <Route exact path = "/portfolio" component = {ProfileAccount} />
          <Route exact path = "/404" component = {NotFoundPage} />
          
          <Redirect to = "/404" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;