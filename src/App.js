import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Notification from "./components/Notification/Notification";
import OnBoarding from "./components/OnBoarding/onBoarding";
import LocalStorage from "./components/LocalStorage/LocalStorage";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={OnBoarding} />
        <Route path="/home" exact component={Home} />
        <Route path="/notification" exact component={Notification} />
        <Route path="/localstorage" exact component={LocalStorage} />
        <Route path="/profile" exact component={Profile} />
      </Switch>

      <Switch>
        <Route path="/home" exact component={Navbar} />
        <Route path="/notification" exact component={Navbar} />
        <Route path="/localstorage" exact component={Navbar} />
        <Route path="/profile" exact component={Navbar} />
      </Switch>

      {/* <Navbar /> */}
    </BrowserRouter>
  );
};

export default App;
