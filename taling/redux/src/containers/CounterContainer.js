import React, { Component } from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increment, decrement } from "../store/modules/counter";
// import { bindActionCreators } from "redux";

const mapStateToProps = ({ counter: { color, number } }) => ({
  number,
  color
});

const mapDispatchToProps = { increment, decrement };

class CounterContainer extends Component {
  render() {
    const { color, number, increment, decrement } = this.props;

    return (
      <div>
        <Counter
          value={number}
          color={color}
          onIncrement={increment}
          onDecrement={decrement}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
