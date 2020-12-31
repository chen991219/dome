import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./pages/Admin";

import Buttons from "./pages/ui/button/button";

import modals from "./pages/ui/modals/modals";

import loading from "./pages/ui/loading/loading";

import notifications from "./pages/ui/notification/notification";

import messages from "./pages/ui/message/message";

import carousel from "./pages/ui/Swiper/Swiper";

import tabs from "./pages/ui/tabs/tabs";

import City from "./pages/city/city";

import rich from "./pages/rich/rich";

import rate from "./pages/rate/rate";

import Uploads from "./pages/Upload/Upload";
import OMap from "./pages/OMap/OMap";

import bar from "./pages/charts/bar";

import pic from "./pages/charts/pic";

import line from "./pages/charts/line";

import Login from "./pages/form/login";

import reg from "./pages/form/reg";

import Home from "./pages/home/home";

export default class Irouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route
              path="/"
              render={() => {
                return (
                     <Admin>
                    <Switch>
                      <Route exact path="/home" component={Home}></Route>
                      <Route path="/home/ui/buttons" component={Buttons} />
                      <Route path="/home/ui/modals" component={modals} />
                      <Route path="/home/ui/loading" component={loading} />
                      <Route
                        path="/home/ui/notification"
                        component={notifications}
                      />
                      <Route path="/home/ui/message" component={messages} />
                      <Route path="/home/ui/carousel" component={carousel} />
                      <Route path="/home/ui/tabs" component={tabs} />
                      <Route path="/home/city" component={City} />
                      <Route path="/home/rich" component={rich} />
                      
                      <Route path="/home/rate" component={rate} />
                      
                      <Route path="/home/Upload" component={Uploads} />
                      <Route path="/home/OMap" component={OMap} />
                      <Route path="/home/charts/bar" component={bar} />
                      
                      <Route path="/home/charts/pic" component={pic} />
                      
                      <Route path="/home/table/line" component={line} />

                      <Route path="/home/form/login" component={Login} />

                      <Route path="/home/form/reg" component={reg} />
                    </Switch>
                  </Admin>
                 
                );
              }}
            />
          </Switch>
        </App>
      </Router>
    );
  }
}
