import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NotFoundPage from '../src/components/NotFoundPage/NotFoundPage';
import Home from '../src/components/Home/Home'
import Login from '../src/components/Login/Login'
import Signup from '../src/components/SignUp/SignUp'
import ProfileAccount from '../src/components/Profile/Profile_account'
import Example from '../src/components/Test/Test'
import ProfileBank from '../src/components/Profile/Profile_bank'
import MarketPlace from './components/Marketplace/MarketPlace'  
import Market from "./components/Market/market";
import Ourcompany from "./components/Static/Ourcompany";
import Ourpeople from "./components/Static/Ourpeople";
import Faqs from "./components/Static/Faqs";
import Terms_and_conditions from "./components/Static/Terms_and_conditions";
import Privacy_policy from "./components/Static/Privacy_policy";
import MarketPlace1 from "./components/Marketplace/MarketPlace1";
import ProfilePersonal from "../src/components/Profile/Profile_personal";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/login" component = {Login} />
          <Route exact path = "/signup" component = {Signup} />
          <Route exact path = "/profile" component = {ProfileAccount} />
          <Route exact path = "/personal" component = {ProfilePersonal} />
          <Route exact path = "/bank" component = {ProfileBank} />
          <Route exact path = "/portfolio" component = {ProfileAccount} />
          <Route exact path = "/MarketPlace" component = {MarketPlace} />
          <Route exact path = "/404" component = {NotFoundPage} />
          <Route exact path = "/test" component = {Example} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/company" component={Ourcompany} />
          <Route exact path="/people" component={Ourpeople} />
          <Route exact path="/faqs" component={Faqs} />
          <Route exact path="/terms" component={Terms_and_conditions} />
          <Route exact path="/privacy_policy" component={Privacy_policy} />
          <Route exact path="/MarketPlace" component={MarketPlace} />
          <Route exact path="/MarketPlace1" component={MarketPlace1} />
          <Route exact path="/test" component={Example} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
