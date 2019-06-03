import * as React from "react";
import { OrderStatusContiner, MonitorControllerContainer } from "./containers";

import "./sass/main.scss";
import "antd/dist/antd.css";

import {
  Layout,
  Badge,
  Row,
  Col,
  Menu,
  Input,
  Button,
  PageHeader,
  Avatar,
  Card,
  Icon,
  Drawer,
  Typography
} from "antd";
import MenuItem from "antd/lib/menu/MenuItem";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App: React.FC = () => (
  <div style={{ minHeight: "100vh" }}>
    <Row type="flex">
      <Col style={{ width: 250 }}>
        <Header>
          <div
            style={{
              float: "left",
              width: 32,
              height: 31,
              background: "no-repeat url(images/woowabros.png) left/26px",
              margin: "16px 28px 16px -24px"
            }}
          />
          <div
            style={{
              float: "left",
              width: 126,
              height: 31,
              color: "white",
              marginLeft: -20
            }}
          >
            Backoffice 101
          </div>
        </Header>

        <Sider width="100%" style={{ background: "#fff", height: "100vh" }}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["dashboard"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {/* theme="dark"는 선택 가능하며, 테마에 따라서 타 컴포넌트들의 색도 설정된다.
                메뉴는 반드시 아이템을 가진다, 메뉴 아이템이나 서브 아이템
                디폴트는 선택되어 있는 것, 디폴트 셀렉트키는 메뉴 자손들의 키가 들어간다. 즉, 링크다.
                메뉴는 실제로 배열이기 때문에, 키로 부르는 것 */}
            <Menu.Item key="dashboard">
              {/* 아이템의 요소들은 자동으로 중앙이다. */}
              <Icon type="dashboard" />
              대시보드
            </Menu.Item>

            <SubMenu
              key="order"
              title={
                <span>
                  <Icon type="rise" />
                  거래 관리
                </span>
              }
            >
              {/* 리액트의 특징 중 하나로, 속성에다가 리액트 컴포넌트를 기술할 수 있다. */}
              <Menu.Item key="1">주문 시스템</Menu.Item>
              <Menu.Item key="2">정산 시스템</Menu.Item>
            </SubMenu>
            <SubMenu
              key="event"
              title={
                <span>
                  <Icon type="gift" />
                  이벤트
                </span>
              }
            >
              <Menu.Item key="1">이벤트 대시보드</Menu.Item>
              <Menu.Item key="2">이벤트 리스트</Menu.Item>
            </SubMenu>
            <SubMenu
              key="setting"
              title={
                <span>
                  <Icon type="setting" />
                  설정
                </span>
              }
            >
              <Menu.Item key="1">사용자 관리</Menu.Item>
              <Menu.Item key="2">권한 관리</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Col>
      <Col style={{ flex: 1 }}>
        <Drawer title="알림" placement="right" closable={false} visible={false}>
          {/* visible는 우측 사이드바 열림 여부
          보통 사용자 인터렉션에 따라 제어 */}
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Content>
          <Row
            type="flex"
            align="middle"
            style={{
              paddingTop: 5,
              paddingBottom: 10,
              borderBottom: "1px solid #ddd"
            }}
          >
            {/* 헤더 */}
            <Col style={{ flex: 1 }}>
              <PageHeader
                title={<span>대시보드</span>}
                extra={[
                  <Input.Search type="search" style={{ width: 200 }} />,
                  <Button
                    key="2"
                    shape="circle"
                    style={{ border: "none" }}
                    icon="search"
                  />,
                  <Button key="3" shape="circle" style={{ border: "none" }}>
                    <Avatar
                      size="small"
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </Button>,
                  <Button shape="circle" style={{ border: "none" }}>
                    <Badge count={3} dot={true}>
                      <Icon type="bell" />
                    </Badge>
                  </Button>
                ]}
                // PageHeader의 extra에 배열을 넣으면 순차적으로 넣어준다.
                // extra는 디폴트로 우측에 밀어넣는다.
              />
            </Col>
          </Row>
          <Row>
            {/* 주문 카드 */}
            <Col>
              <div style={{ padding: 20 }}>
                <main>
                  <Card title="주문">
                    <OrderStatusContiner />
                  </Card>
                </main>
              </div>
            </Col>
          </Row>
        </Content>
      </Col>
    </Row>
  </div>
);

export default App;
