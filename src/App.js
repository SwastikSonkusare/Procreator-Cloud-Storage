import React from "react";
import Home from "./components/Home/Home";
import Notification from "./components/Notification/Notification";
import OnBoarding from "./components/OnBoarding/onBoarding";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={OnBoarding} />
        <Route path="/home" exact component={Home} />
        <Route path="/notification" exact component={Notification} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
