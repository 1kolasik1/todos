import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Todo from "./Todo.jsx";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      todos: [
        {
          name: "Выучить английский",
          done: true,
        },
        {
          name: "Поставить будильник",
          done: false,
        },
        {
          name: "Поиграть с котом",
          done: false,
        },
      ],
    };
  }
  render() {
    const doneCount = this.state.todos.filter((todo) => todo.done).length;
    const allCount = this.state.todos.length;
    const leftCount = allCount - doneCount;
    return (
      <div>
        <p className="pl-[10vh] pb-[3vh] mt-[10px] text-2xl font-bold">ToDo</p>
        <div className="flex justify-around">
          <p className="text-xl font-bold">Все: {allCount}</p>
          <p className="text-xl font-bold">Сделал: {doneCount}</p>
          <p className="text-xl font-bold">Осталось: {leftCount}</p>
        </div>
        <div className="flex flex-col justify-center items-center text-sm">
          <input
            className="min-w-[80%] w-[40vh] h-[5vh] mt-[4vh] text-2xl border-solid border-4 "
            value={this.state.name}
            onChange={this.handleSetName}
          />
          <button
            onClick={this.handleAddTodo}
            className="h-[5vh] mt-[5vh] bg-gray-400 py-[1vh] px-[2vh] rounded"
          >
            Добавить
          </button>
        </div>
        <div className="flex flex-col justify-center items-center text-lg">
          {this.state.todos.map((todo) => (
            <Todo
              className="flex items-center border-solid border-2 mt-[3vh] "
              name={todo.name}
              done={todo.done}
              onDone={this.handleSetDone}
              onClick={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }

  handleSetName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAddTodo = (name) => {
    const trimStr = this.state.name.trim();
    if (trimStr == "" || this.state.todos.find((todo) => todo.name === name)) {
    } else {
      const todo = {
        name: this.state.name,
        done: false,
      };
      this.setState({
        name: "",
        todos: this.state.todos.concat([todo]),
      });
    }
  };

  handleDelete = (name) => {
    const todos = this.state.todos.filter((todo) => todo.name !== name);
    this.setState({ todos });
  };
  handleSetDone = (newDone, name) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.name === name ? { name, done: newDone } : todo
      ),
    });
  };
}

export default App;
