import { ITodo } from "../../containers/Todos/components/Todo/types";

// The context (extended state) of the machine
export interface TodosContext {
  /** The todo adding object */
  todo: string;
  /** The todo list */
  todos: Array<any>;
  /** The remaining todos count */
  remaining: number;
}

// The hierarchical (recursive) schema for the states
export interface TodosStateSchema {
  states: {
    all: {};
    active: {};
    completed: {};
  };
}

// The events that the machine handles
export type TodosEvent =
  | { type: "SHOW.all" }
  | { type: "SHOW.active" }
  | { type: "SHOW.completed" }
  | { type: "NEWTODO.CHANGE"; value: string }
  | { type: "NEWTODO.ADD"; value: string }
  | { type: "TODO.UPDATE"; todo: ITodo };
