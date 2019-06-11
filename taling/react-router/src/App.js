import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import History from "./History";
import WithRouterSample from "./WithRouterSample";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/profiles">profiles</Link>
          </li>
          <li>
            <Link to="/history">history</Link>
          </li>
        </ul>

        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/history" component={History} />
          <Route render={() => <div>존재하지 않는 페이지입니다.</div>} />
        </Switch>
        <div>
          <h1>???</h1>
          <WithRouterSample />
        </div>
      </div>
    );
  }
}

export default App;
