import React, { Component } from "react";
import WaitingList from "../components/WaitingList";
import { connect } from "react-redux";
import { changeInput, enter, leave, create } from "../store/modules/waiting";
// import * as WatingActions from '../store/modules/watting'

class WaitingContainer extends Component {
  handleInput = ({ target: { value } }) => {
    this.props.changeInput(value);
  };

  handleCreate = e => {
    e.preventDefault();
    this.props.create(this.props.input);
    this.props.changeInput("");
  };

  render() {
    const { input, list, changeInput, enter, leave, create } = this.props;
    return (
      <div>
        <WaitingList
          onChange={changeInput}
          waitingList={list}
          onEnter={enter}
          onLeave={leave}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ wating: { input, list } }) => ({
  input,
  list
});

const mapDispatchToProps = {
  changeInput,
  enter,
  leave,
  create
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingContainer);
