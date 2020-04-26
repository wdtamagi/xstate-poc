import React from "react";
import { Todo } from "./components/todo";
import { Footer } from "./components/footer";

const DownIcon = () => {
  return (
    <svg
      className="fill-current text-gray-400 inline-block h-6 w-6"
      x="0px"
      y="0px"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 255 255"
    >
      <g>
        <g id="arrow-drop-down">
          <polygon points="0,63.75 127.5,191.25 255,63.75 		" />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export const Todos = () => {
  return (
    <div className="max-w-2xl rounded overflow-hidden shadow-lg mx-auto">
      <div className="flex flex-row px-5 bg-gray-200">
        <button
          style={{ outline: "none" }}
          className="flex items-center rounded rounded-r-none font-bold"
        >
          <DownIcon />
        </button>
        <input
          style={{ outline: "none" }}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-4 pl-4 leading-tight italic"
          id="grid-last-name"
          type="text"
          placeholder="What do you need?"
        />
      </div>
      <ul>
        {[
          { text: "teste", checked: false },
          {
            text:
              "dsadsadasdsadsadasdsadsdsadsadsadasdasdsadsadsadasdsadasdsadas",
            checked: true,
          },
        ].map((item, index) => (
          <Todo
            key={`todo_${index}`}
            text={item.text}
            checked={item.checked}
            onClick={() => null}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
};
