import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DefaultLayout } from "../containers";
import * as Pages from "../pages";
import PrivateRoute from "./PrivateRoute";

interface IProps {
  children?: React.ReactNode;
}

const Router: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout>
          <Switch>
            <Route exact path="/" component={Pages.Dashboard} />
            <PrivateRoute exact path="/orders" page={Pages.Order} />
            <Route component={Pages.PageNotFound} />
          </Switch>
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
