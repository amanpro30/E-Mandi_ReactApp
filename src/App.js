import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout>{/* <Home >         */}</Layout>
    </div>
  );
}

export default App;
