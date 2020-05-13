// The context (extended state) of the machine
export interface TodoContext {
  /** The id of todo */
  id?: string;
  /** The title of todo */
  text: string;
  /** The completed state of todo */
  checked?: boolean;
}

// The hierarchical (recursive) schema for the states
export interface TodoStateSchema {
  states: {
    unknown: {};
    pending: {};
    completed: {};
  };
}

// The events that the machine handles
export type TodoEvent = { type: "TOGGLE_CHECK" };
