import React, { Component } from 'react'
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./containers/Home";
import CreateUser from "./containers/CreateUser";
import EditUser from "./containers/EditUser";
import DetailUser from "./containers/DetailUser";

export default class App extends Component {

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={Home} />

          <Route path="/create" exact component={CreateUser} />

          <Route path="/detail/:id" exact component={DetailUser} />

          <Route path="/edit/:id" exact component={EditUser} />
        </BrowserRouter>
      </div>
    )
  }
}
