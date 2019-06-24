import * as React from "react";
import { PageHeader } from "../components";
import { ShopListContainer, AuthContainer } from "../containers";

interface IProps {}

export default class Order extends React.PureComponent<IProps> {
  render() {
    return (
      <React.Fragment>
        <AuthContainer>
          <PageHeader label="가게" />
        </AuthContainer>
        <ShopListContainer />
      </React.Fragment>
    );
  }
}
