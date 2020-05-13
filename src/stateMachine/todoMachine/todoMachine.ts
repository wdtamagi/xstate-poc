import { Machine, actions } from "xstate";
import { TodoContext, TodoStateSchema, TodoEvent } from "./types";
const { assign } = actions;

export const todoMachine = Machine<TodoContext, TodoStateSchema, TodoEvent>({
  id: "todo",
  initial: "unknown",
  context: {
    id: undefined,
    text: "",
  },
  on: {
    TOGGLE_CHECK: {
      target: "completed",
      actions: [
        assign<TodoContext, TodoEvent>({ checked: true }),
        "notifyChanged",
      ],
    },
  },
  states: {
    unknown: {
      on: {
        "": [
          {
            target: "completed",
            cond: (ctx) => !!ctx.checked,
          },
          { target: "pending" },
        ],
      },
    },
    pending: {},
    completed: {
      on: {
        TOGGLE_CHECK: {
          target: "pending",
          actions: [
            assign<TodoContext, TodoEvent>({ checked: false }),
            "notifyChanged",
          ],
        },
      },
    },
  },
});
