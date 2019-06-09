import React, { Component } from "react";
import Palette from "../components/Palette";
import { connect } from "react-redux";
import changeColor from "../store/modules/counter";

const mapStateToProps = state => ({ color: state.counter.color });
const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color))
});

class PaletteContainer extends Component {
  render() {
    const { color, changeColor } = this.props;

    return (
      <>
        <Palette selected={color} onSelect={changeColor} />
      </>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteContainer);
