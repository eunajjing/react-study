import * as React from "react";
import { connect } from "react-redux";
import { IStoreState, IAuthentication } from "../store";
import { requestLogout } from "../actions";

const AuthWrapper: React.FC = props => {
  const children = React.Children.map(
    props.children,
    (child: React.ReactElement, index: number) => {
      return React.cloneElement(child, { ...props });
    }
  );

  return <React.Fragment>{children}</React.Fragment>;
};

export const AuthContainer = connect(
  (state: IStoreState) => ({
    authentication: state.authentication
  }),
  dispatch => ({
    requestLogout: () => dispatch(requestLogout())
  })
)(AuthWrapper);
