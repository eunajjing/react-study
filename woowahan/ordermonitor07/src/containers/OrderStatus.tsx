import * as React from "react";
import { connect } from "react-redux";
import { StoreState, ITimelineItem } from "../types";
import { Maybe, Counter, MonitorCard, TinyChart } from "../components";

export interface OrderStatusProps {
  showTimeline: boolean;
  success: number;
  failure: number;
  successTimeline: ITimelineItem[];
  failureTimeline: ITimelineItem[];
}

const mapStateToProps = (state: StoreState) => {
  return {
    showTimeline: state.showTimeline,
    success: state.success,
    failure: state.failure,
    successTimeline: state.successTimeline,
    failureTimeline: state.failureTimeline
  };
};

class OrderStatus extends React.Component<OrderStatusProps> {
  state = {
    errorRate: 0
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.success !== this.props.success ||
      prevProps.failure !== this.props.failure
    ) {
      this.setState({
        errorRate:
          this.props.failure > 0
            ? Number((this.props.failure / this.props.success) * 100).toFixed(2)
            : 0
      });
    }
  }

  render() {
    return (
      <MonitorCard>
        <Counter title="Success" count={this.props.success}>
          <Maybe test={this.props.showTimeline}>
          {/* 
          Maybe는 어떤 상태일 때는 어떤 상태를 보여주고 안 보여주고가 다른데
          리액트는 분기문이 없다.
          그래서 보통 { if() } 이런 식으로 짜야 하는데
          보기에 너무 복잡하고
          삼항으로도 처리를 하긴 하는데
          별로 보기도 그렇고
          분기문을 따로 빼는 컴포넌트를 사용
          */}
            <TinyChart
              source={this.props.successTimeline.slice(
                this.props.successTimeline.length - 10
              )}
            />
          </Maybe>
        </Counter>
        <Counter title="Failure" count={this.props.failure} color="red">
          <Maybe test={this.props.showTimeline}>
            <TinyChart
              source={this.props.failureTimeline.slice(
                this.props.failureTimeline.length - 10
              )}
            />
            {/* 배열로 오긴 하는데 마지막 10분치만 가져오려고 한 것... */}
          </Maybe>
        </Counter>
        <Counter title="Error Rate" count={this.state.errorRate} unit="%" />
      </MonitorCard>
    );
  }
}

export const OrderStatusContiner = connect(mapStateToProps)(OrderStatus);
