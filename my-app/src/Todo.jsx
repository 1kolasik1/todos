import React from "react";
import "./App.css";
import { render } from "@testing-library/react";

export default class Todo extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.done
            ? "flex  items-center bg-[#ffe4c4] text-green-700 border-solid border-4 mt-[5vh] w-full lg:w-4/6"
            : "flex items-center border-solid border-4 mt-[5vh] w-full lg:w-4/6"
        }
      >
        <input
          className={
            this.props.done
              ? "relative appearance-none w-[20px] h-[20px] bg-[#7da6ff] rounded-full cursor-pointer shadow-inner ml-[5px]"
              : "relative appearance-none w-[20px] h-[20px] bg-[#ccc] rounded-full cursor-pointer shadow-inner ml-[5px]"
          }
          type="checkbox"
          checked={this.props.done}
          onChange={this.handleCheck}
        />
        <span className="text-2xl font-bold pl-[20px] lg:text-[24px]">
          {this.props.name}
        </span>
        <button
          className="bg-red-500 ml-auto h-full text-white text-2xl"
          onClick={this.handleRemove}
        >
          Delete
        </button>
      </div>
    );
  }

  handleCheck = (e) => {
    const done = e.target.checked;
    this.props.onDone(done, this.props.name);
  };
  handleRemove = () => {
    this.props.onClick(this.props.name);
  };
}
