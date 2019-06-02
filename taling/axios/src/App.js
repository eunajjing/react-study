import React, { Component } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

class App extends Component {
  state = {
    category: "all"
  };

  handleSelect = category => {
    this.setState({
      category
    });
  };

  render() {
    return (
      <>
        <Categories
          category={this.state.category}
          onSelect={this.handleSelect}
        />
        <NewsList category={this.state.category} />
      </>
    );
  }
}

export default App;
