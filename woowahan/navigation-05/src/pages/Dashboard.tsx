import * as React from "react";
import { OrderStatusContiner } from "../containers";
import { PageHeader } from "../components";

interface IProps {}

const Dashboard: React.FC<IProps> = props => {
  return (
    <React.Fragment>
      <PageHeader label="대시보드" />
      <OrderStatusContiner />
    </React.Fragment>
  );
};

export default Dashboard;
