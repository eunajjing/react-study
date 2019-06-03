import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Num } from "./layout";

import "antd/dist/antd.css";
// 두 개의 레이아웃 제공
// 그리드와 플렉스 박스 시스템

// 그리드 : 출판 시스템에서 출발
// 백그라운드를 격자 무늬, 컬럼이라는 개념을 두고
// 특정 컴포넌트에게 몇 컬럼을 배분하는 식
// 보통 12컬럼, 그러나 엔트 디자인은 24컬럼

// Row : 격자 중 라인, 24칼럼을 가지고 있음
// Col : 격자
// 원래 Row와 Col은 시각적 요소들이 하나도 없음

// 플렉스 박스 레이아웃
// 플렉스는 브라우저 호환성을 고민해봐야 함
// 특정 요소가 flex 속성을 가지면, 하위 요소가 flex를 지닌다

function App() {
  return (
    <div>
      <h4>24컬럼 그리드 시스템</h4>

      <Row>
        {/* 로우로 시작 */}
        <Col span={6}>
          {/* 1~24 */}
          <Num>1</Num>
        </Col>
        <Col span={6}>
          {/* 이 안에서도 Col을 부르게 되면, 부모를 24로 나눈 값으로 정렬된다 */}
          <Num>2</Num>
        </Col>
        <Col span={6}>
          <Num>3</Num>
        </Col>
        <Col span={6}>
          <Num>4</Num>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Num>1</Num>
        </Col>
        <Col span={4}>
          <Num>2</Num>
        </Col>
        <Col span={4}>
          <Num>3</Num>
        </Col>
        <Col span={4}>
          <Num>4</Num>
        </Col>
      </Row>

      <h4>컬럼이 계속 늘어나면?</h4>
      <Row>
        <Col span={6}>
          <Num>1</Num>
        </Col>
        <Col span={6}>
          <Num>2</Num>
        </Col>
        <Col span={6}>
          <Num>3</Num>
        </Col>
        <Col span={6}>
          <Num>4</Num>
        </Col>
        <Col span={6}>
          <Num>5</Num>
        </Col>
        <Col span={6}>
          <Num>6</Num>
        </Col>
        <Col span={6}>
          <Num>7</Num>
        </Col>
        <Col span={6}>
          <Num>8</Num>
        </Col>
        <Col span={6}>
          <Num>9</Num>
        </Col>
      </Row>

      <h4>offset</h4>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8} offset={8}>
          col-8
        </Col>
      </Row>

      <h4>다단 나누기도 가능하다</h4>

      <h4>컬럼 속 컬럼</h4>
      <Row>
        <Col span={24}>
          <Num>1</Num>
          <Row>
            <Col span={8}>
              <Num>2</Num>
              <Row>
                <Col span={24}>
                  <Num>2.1</Num>
                </Col>
                <Col span={24}>
                  <Num>2.2</Num>
                  <Row>
                    <Col span="12">
                      <Num>2.2.1</Num>
                    </Col>
                    <Col span="12">
                      <Num>2.2.2</Num>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Num>2.3</Num>
                </Col>
              </Row>
            </Col>
            <Col span={16}>
              <Num>3</Num>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* <p>Align Top</p>
    <Row type="flex" justify="center" align="top">
      <Col span={4}>
         원래 col 시스템을 가지고 있지 않음에도, 엔트에서 주는 것은 된다 
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
