import React, { Component } from "react";

const withSplitted = getComponent => {
  return class withSplitted extends Component {
    state = {
      Splitted: null
    };

    constructor(props) {
      super(props);
      getComponent().then(({ default: { Splitted } }) => {
        this.setState({
          Splitted
        });
      });
    }

    render() {
      const { Splitted } = this.state;

      if (!Splitted) return null;
      return <Splitted />;
    }
  };
};

export default withSplitted;
