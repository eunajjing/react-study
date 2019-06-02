import React from "react";
import { Link, Route, NavLink } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록 : </h3>
      <ul>
        <li>
          <NavLink to="/profiles/jordan" activeStyle={{ color: "black" }}>
            jordan
          </NavLink>
        </li>
        <li>
          <NavLink to="/profiles/james">james</NavLink>
          {/* link와 navlink의 차이, navlink는 activeStyle, activeClassname 있음 */}
        </li>
      </ul>

      <Route
        exact
        path="/profiles"
        render={() => <div>유저를 선택해주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
