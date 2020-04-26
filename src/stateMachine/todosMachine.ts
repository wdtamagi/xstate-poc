import { Machine } from "xstate";

export const todosMachine = Machine({
  id: "todos",
  initial: "all",
  states: {
    all: {},
    active: {},
    completed: {},
  },
  on: {
    "SHOW.all": ".all",
    "SHOW.active": ".active",
    "SHOW.completed": ".completed",
  },
});
