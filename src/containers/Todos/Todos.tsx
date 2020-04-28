import React from "react";
import { useMachine } from "@xstate/react";
import { todosMachine, ITodo } from "../../stateMachine/todosMachine";
import Todo from "./components/Todo/index";
import Footer from "./components/Footer/index";

const Todos = () => {
  const [state, send] = useMachine(todosMachine);
  const { todo, todos } = state.context;

  const onChangeView = (view: string) => send(`SHOW.${view}`);
  const anyTodoDone = todos.some((item) => item.checked);
  const handleOnTodoClick = (todo: ITodo) =>
    send({ type: `TODO.UPDATE`, todo });

  return (
    <div className="max-w-2xl rounded overflow-hidden shadow-lg mx-auto">
      <div className="flex flex-row px-5 bg-gray-200">
        <button
          style={{ outline: "none" }}
          className="flex items-center rounded rounded-r-none font-bold"
          onClick={() =>
            send({
              type: "NEWTODO.ADD",
              value: todo,
            })
          }
        >
          <DownIcon />
        </button>
        <input
          style={{ outline: "none" }}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-4 pl-4 leading-tight italic"
          id="grid-last-name"
          type="text"
          placeholder="What do you need?"
          onChange={(e) =>
            send({
              type: "NEWTODO.CHANGE",
              value: e.target.value,
            })
          }
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              send({
                type: "NEWTODO.ADD",
                value: todo,
              });
            }
          }}
          value={state.context.todo}
        />
      </div>
      <ul>
        {todos.map((item) => (
          <Todo
            key={`todo_${item.id}`}
            todo={item}
            onClick={handleOnTodoClick}
          />
        ))}
      </ul>
      <Footer
        remaining={0}
        activeView={state.value.toString()}
        onChangeView={onChangeView}
        anyTodoDone={anyTodoDone}
      />
    </div>
  );
};

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

export default Todos;
