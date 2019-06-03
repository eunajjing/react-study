import * as React from "react";
import {
  NotificationContainer,
  OrderStatusContiner,
  MonitorControllerContainer
} from "./containers";
import { Typography } from "antd";

import "antd/dist/antd.css";
import "./sass/main.scss";

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <NotificationContainer />
        {/* 가시적인 ui가 없으니까 붙임 */}
        <header>
          <Typography.Title>React & TS Boilerplate</Typography.Title>
        </header>
        <main>
          <OrderStatusContiner />
          <MonitorControllerContainer />
        </main>
      </div>
    );
  }
}

// 비동기는 성공 / 실패 등이 있고
// 사용자에게 가는 경우도 있고 뭐 그렇지 않나
// 이런 부분에 대해 설계

// 유형을 잘 나눠서 앱 전체 유형
// 개별 유형들을 만들어서 사용

// 실제 액션들이 리듀서로 바로 들어가는 애가 있고
// 사가 처리 후 사가가 보내는 경우가 있고
// 리듀서가 받으면 컴포넌트가 받고 이 플로우...