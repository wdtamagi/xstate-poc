import { Machine, assign } from "xstate";
import { uuid } from "uuidv4";
import { TodosContext, TodosStateSchema, TodosEvent } from "./types";

const newTodo = (text: string) => ({ id: uuid(), text: text, checked: false });

export const todosMachine = Machine<TodosContext, TodosStateSchema, TodosEvent>(
  {
    id: "todos",
    initial: "all",
    states: {
      all: {},
      active: {},
      completed: {},
    },
    context: {
      todo: "",
      todos: [],
      remaining: 0,
    },
    on: {
      "SHOW.all": ".all",
      "SHOW.active": ".active",
      "SHOW.completed": ".completed",
      "NEWTODO.CHANGE": {
        actions: assign({
          todo: (ctx, e) => e.value,
        }),
      },
      "NEWTODO.ADD": {
        actions: [
          assign({
            todo: (ctx, e) => "",
            todos: (ctx, e) => [...ctx.todos, newTodo(e.value.trim())],
            remaining: (ctx, e) => ctx.remaining + 1,
          }),
          "updateLocalStorage",
        ],
      },
      "TODO.UPDATE": {
        actions: [
          assign({
            todos: (ctx, e) =>
              ctx.todos.map((item) => (item.id === e.todo.id ? e.todo : item)),
            remaining: (ctx, e) =>
              e.todo.checked ? ctx.remaining - 1 : ctx.remaining + 1,
          }),
          "updateLocalStorage",
        ],
      },
    },
  }
);
