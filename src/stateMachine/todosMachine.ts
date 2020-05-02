import { Machine, assign } from "xstate";
import { uuid } from "uuidv4";
import { ITodo } from "../containers/Todos/components/Todo/types";

interface ITodosContext {
  /** The todo adding object */
  todo: string;
  /** The todo list */
  todos: Array<ITodo>;
  /** The remaining todos count */
  remaining: number;
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
          todos: (ctx, e) => [
            ...ctx.todos,
            { id: uuid(), text: e.value, checked: false },
          ],
          remaining: (ctx, e) => ctx.remaining + 1,
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
          remaining: (ctx, e) =>
            e.todo.checked ? ctx.remaining - 1 : ctx.remaining + 1,
        }),
      ],
    },
  },
});
