import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";
import CMS from "./containers/Uploadui";
// import { Offline, Online } from "react-detect-offline";
// import TitleScreen from "./components/layouts/TitleScreen";
// import Toaster from "./components/UI/Toaster/Toaster";

// import RouteHandler from "./commons/RouteHandler";
class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route path="/title" component={TitleScreen} /> */}
          <Route path="/" component={CMS} />
        </Switch>
      </HashRouter>
    );
  }
  componentWillMount() {
    //   <Offline>
    //   <Toaster condition="offline" />
    // </Offline>
    // <Online>
    //   <Toaster condition="online" />
    // </Online>
  }
}

export default Routes;
