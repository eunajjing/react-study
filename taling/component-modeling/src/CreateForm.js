import React, { Component } from "react";
import "./CreateForm.css";

class CreateForm extends Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div className="CreateForm">
        <form className="form_container" onSubmit={this.handleCreate}>
          <input
            placeholder="something to do?"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">추가</button>
        </form>
      </div>
    );
  }
}

export default CreateForm;
