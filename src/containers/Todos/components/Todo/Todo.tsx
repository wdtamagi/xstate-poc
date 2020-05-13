import React from "react";
import { useMachine } from "@xstate/react";

import { IProps } from "./types";
import { todoMachine } from "../../../../stateMachine/todoMachine/todoMachine";

const checkClasses = "fill-current text-gray-500 m-auto h-5 w-5";
const UnChecked = () => {
  return (
    <svg className={checkClasses} strokeWidth="0" viewBox="0 0 24 24">
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
    </svg>
  );
};
const Checked = () => {
  return (
    <svg className={checkClasses} strokeWidth="0" viewBox="0 0 24 24">
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </svg>
  );
};

const Todo = ({ todo, onChange }: IProps) => {
  const [state, send] = useMachine(
    todoMachine
      .withConfig({
        actions: {
          notifyChanged(ctx) {
            onChange({
              id: ctx.id,
              text: ctx.text,
              checked: !!ctx.checked,
            });
          },
        },
      })
      .withContext(todo)
  );

  const { checked, text } = state.context;

  return (
    <li
      className="flex flex-row items-center text-gray-600 bg-gray-200 px-5 py-2"
      style={{ borderTop: "1px solid #bdc2ca5e" }}
      onClick={() => send("TOGGLE_CHECK")}
    >
      {checked ? <Checked /> : <UnChecked />}
      <span
        className={`w-full truncate text-gray-600 border border-gray-200 py-1 pl-4 ${
          checked && "line-through"
        }`}
      >
        {text}
      </span>
    </li>
  );
};

export default Todo;
