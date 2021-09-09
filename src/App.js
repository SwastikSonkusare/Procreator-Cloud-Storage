import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Notification from "./components/Notification/Notification";
import OnBoarding from "./components/OnBoarding/onBoarding";
import LocalStorage from "./components/LocalStorage/LocalStorage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={OnBoarding} />
        <Route path="/home" exact component={Home} />
        <Route path="/notification" exact component={Notification} />
        <Route path="/localstorage" exact component={LocalStorage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
