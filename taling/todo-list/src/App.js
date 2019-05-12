import React, { Component } from 'react';

class App extends Component {

  id = 1;

  state = {
    username: '',
    job: '',
    list: []
  };

  // usernameInput = null;
  usernameInput = React.createRef();

  handleInput = (e) => {

    const { name, value } = e.target

    this.setState({
      [name]: value
    });
  };

  handleInsert = e => {
    e.preventDefault();
    // 새로고침 방지
    const { username, job, list } = this.state;

    this.setState({
      list: list.concat({
        username,
        job,
        id: this.id++
      }),
      username: '',
      job: ''
    })

    // this.usernameInput.focus();
    this.usernameInput.current.focus();
  }


  handleKeyPress = (e) => {
    if (e.key === 'Enter') this.handleInsert(e);
  }

  handleRemove = (id) => {
    const { list } = this.state;
    // const index = list.findIndex(item => item.id === id); // id 로 index 를 조회합니다.
    // const nextList = list.slice(); // 배열 내용을 복사합니다
    // nextList.splice(index, 1); // 배열에서 index 번째 아이템을 제거합니다.
    this.setState({
      list: list.filter(item => item.id !== id)
    });
  }

  render() {

    const { list } = this.state;

    return (
      <div>
        <form onSubmit={this.handleInsert}>
          {/* <input value={this.state.username} name="username" onChange={this.handleInput} ref={(ref)=> {this.usernameInput = ref} }/> */}
          <input value={this.state.username} name="username" onChange={this.handleInput} ref={this.usernameInput} />
          <input value={this.state.job} name="job" onChange={this.handleInput}
            onKeyPress={this.handleKeyPress} />
          <button type="submit">insert</button>
          <hr />
          <ul>
            {list.map((item) => {
              return (
                <div key={item.id}>
                  <li>{item.username} - {item.job}</li>
                  <button onClick={() => this.handleRemove(item.id)}>remove</button>
                </div>
              )
            })}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;