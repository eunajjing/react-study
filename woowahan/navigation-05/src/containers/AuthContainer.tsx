import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IStoreState } from "../store";

interface IProps {
  children: React.ElementType;
}

const Authentication: React.FC = ({ children, ...rest }) => {
  const Children = children;

  return (
    <React.Fragment>
      <Children {...rest} />
    </React.Fragment>
  );
};
