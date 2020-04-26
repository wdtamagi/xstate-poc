import React from "react";
import { useMachine } from "@xstate/react";
import { todosMachine } from "../../../../stateMachine/todosMachine";

const Footer = ({ remaining = 0 }) => {
  const [current, send] = useMachine(todosMachine);

  const getButtonClass = (active: boolean = false) =>
    `hover:bg-gray-400 font-semibold hover:text-white py-2 px-4 rounded ${
      active ? "bg-gray-400 text-white" : "bg-transparent text-gray-600"
    }`;

  return (
    <div className="relative flex flex-row justify-between items-center px-5 py-4 bg-gray-200 text-gray-600 text-xs">
      <span>{`${remaining} ${remaining > 1 ? "items" : "item"} left`}</span>
      <div className="absolute h-full inset-0 m-0 p-0 text-center px-5 py-4">
        <button
          style={{ outline: "none" }}
          className={getButtonClass(current.matches("all"))}
          onClick={() => send("SHOW.all")}
        >
          All
        </button>
        <button
          style={{ outline: "none" }}
          className={getButtonClass(current.matches("active"))}
          onClick={() => send("SHOW.active")}
        >
          Active
        </button>
        <button
          style={{ outline: "none" }}
          className={getButtonClass(current.matches("completed"))}
          onClick={() => send("SHOW.completed")}
        >
          Completed
        </button>
      </div>
      <button
        style={{ outline: "none" }}
        className={`${getButtonClass()} z-10`}
      >
        Clear completed
      </button>
    </div>
  );
};

export default Footer;
