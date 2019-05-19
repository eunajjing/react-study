import React, { Component } from "react";

class App extends Component {
  id = 0;

  state = {
    username: "",
    job: "",
    list: []
  };

  usernameInput = React.createRef();

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });

    // const update = {};
    // update[name] = value;
    // this.setState(update);
  };

  handleInsert = e => {
    e.preventDefault();

    const { username, job, list } = this.state;

    this.setState({
      list: list.concat({
        id: this.id++,
        username,
        job
      }),
      username: "",
      job: ""
    });

    this.usernameInput.current.focus();
  };

  handleRemove = id => {
    const { list } = this.state;
    this.setState({
      list: list.filter(item => item.id !== id)
    });
  };

  render() {
    const { list, username, job } = this.state;

    return (
      <div>
        <form onSubmit={this.handleInsert}>
          <input
            value={username}
            onChange={this.handleChange}
            name="username"
            ref={this.usernameInput}
          />
          <input value={job} onChange={this.handleChange} name="job" />
          <button type="submit">추가하기</button>
        </form>
        <hr />
        <ul>
          {list.map(item => (
            <li key={item.id}>
              {item.username} - {item.job}{" "}
              <button onClick={() => this.handleRemove(item.id)}>삭제</button>
            </li>
          ))}
          {/* index는 배열 안에서 유동적으로 바뀔 수 있는 값이기 때문에 id를 만들어주는 게 좋다 */}
        </ul>
      </div>
    );
  }
}

export default App;
