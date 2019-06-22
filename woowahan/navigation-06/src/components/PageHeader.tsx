import * as React from "react";
import {
  Row,
  Col,
  Button,
  Avatar,
  Badge,
  Icon,
  Input,
  PageHeader as Header
} from "antd";
import { IAuthentication } from "../store";
import { OmitProps } from "antd/lib/transfer/renderListBody";

const DEFAULT_PICTURE =
  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";

interface IProps {
  picture?: string;
  label?: string;
  authentication?: IAuthentication;
  requestLogout?: () => void;
}

export const PageHeader: React.FC<IProps> = ({
  label,
  authentication,
  requestLogout
}) => {
  const { name = "", picture = DEFAULT_PICTURE } = authentication;
  return (
    <Row
      type="flex"
      align="middle"
      style={{
        paddingTop: 5,
        paddingBottom: 10,
        borderBottom: "1px solid #ddd"
      }}
    >
      <Col style={{ flex: 1 }}>
        <Header
          title={<span>{label}</span>}
          extra={[
            <Input.Search key="1" type="search" style={{ width: 200 }} />,
            <Button
              key="2"
              shape="circle"
              style={{ border: "none" }}
              icon="search"
            />,
            <Button
              key="3"
              onClick={requestLogout}
              shape="circle"
              style={{ border: "none" }}
            >
              <Avatar size="small" src={picture} />
            </Button>,
            <Button key="4" shape="circle" style={{ border: "none" }}>
              <Badge count={3} dot={true}>
                <Icon type="bell" />
              </Badge>
            </Button>
          ]}
        />
      </Col>
    </Row>
  );
};
