import { Machine, assign } from "xstate";
import { uuid } from "uuidv4";

export interface ITodo {
  id: string;
  text: string;
  checked: boolean;
}

interface ITodosContext {
  todo: string;
  todos: Array<ITodo>;
}

export const todosMachine = Machine<ITodosContext>({
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
          todos: (ctx, e) => [
            ...ctx.todos,
            { id: uuid(), text: e.value, checked: false },
          ],
        }),
        assign({
          todo: (ctx, e) => "",
        }),
      ],
    },
    "TODO.UPDATE": {
      actions: [
        assign({
          todos: (ctx, e) => {
            return ctx.todos.map((item) =>
              item.id === e.todo.id ? e.todo : item
            );
          },
        }),
      ],
    },
  },
});
