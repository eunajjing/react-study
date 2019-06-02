import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 바뀐 프롭스, nextProps
    // if (this.props.todo !== nextProps.todo) {
    //   return true;
    // } else {
    //   return false;
    // }
    return nextProps.todo !== this.props.todo;
  }

  render() {
    const { todo, onToggle, onRemove, style } = this.props;

    return (
      <div style={style}>
        <div
          className={`TodoItem ${todo.checked && "active"}`}
          onClick={() => onToggle(todo.id)}
        >
          <div className="check">&#10004;</div>
          <div
            className="remove"
            onClick={e => {
              e.stopPropagation();
              onRemove(todo.id);
            }}
          >
            [지우기]
          </div>
          <div className="text">{todo.text}</div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
