import { Machine, assign } from "xstate";

interface ITodo {
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
  },
});
