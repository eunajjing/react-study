import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { StoreState } from "../types";
import {
  startMonitoring,
  stopMonitoring,
  showOrderTimelineChart,
  hideOrderTimelineChart
} from "../actions";
import { PlayButton, Toggle } from "../components";

export interface MonitorControllerProps {
  monitoring: boolean;
  onStart(): void;
  onStop(): void;
  onShowOrderTimelineChart(): void;
  onHideOrderTimelineChart(): void;
}

const mapStateToProps = (state: StoreState) => {
  return {
    monitoring: state.monitoring
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onStart: () => {
    dispatch(startMonitoring());
  },
  onStop: () => {
    dispatch(stopMonitoring());
  },
  onShowOrderTimelineChart: () => {
    dispatch(showOrderTimelineChart());
  },
  onHideOrderTimelineChart: () => {
    dispatch(hideOrderTimelineChart());
  }
});

class MonitorController extends React.PureComponent<MonitorControllerProps> {
  render() {
    return (
      <div>
        <PlayButton
          monitoring={this.props.monitoring}
          onPlay={this.props.onStart}
          onPause={this.props.onStop}
        />
        <Toggle
          label="Chart"
          onOn={this.props.onShowOrderTimelineChart}
          onOff={this.props.onHideOrderTimelineChart}
        />
      </div>
    );
  }
}

export const MonitorControllerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MonitorController);
