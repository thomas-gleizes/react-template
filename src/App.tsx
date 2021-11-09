import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { routes } from "./resources/constant";
import { route as routeType } from "./resources/types";
import Layout from "./components/layouts/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          {routes.map((route: routeType, index: number) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
