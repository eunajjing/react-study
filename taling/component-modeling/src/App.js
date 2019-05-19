import React, { Component } from "react";
import "./App.css";

import CreateForm from "./CreateForm";
import TodoList from "./TodoList";

const bulkTodos = (() => {
  const array = [];
  for (let i = 0; i < 5000; i++) {
    array.push({
      id: i,
      text: `Todo ${i}`,
      checked: false
    });
  }
  return array;
})();

class App extends Component {
  id = 1;

  state = {
    todos: bulkTodos
  };

  handleSubmit = text => {
    const { todos } = this.state;
    this.setState({
      todos: todos.concat({
        id: this.id++,
        text,
        checked: false
      })
    });
  };

  handleToggle = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    });
  };

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <h3>TODO LIST</h3>
        <CreateForm onSubmit={this.handleSubmit} />
        <TodoList
          todos={todos}
          onToggle={this.handleToggle}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
