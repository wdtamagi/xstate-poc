export interface ITodo {
  /** The id */
  id: string;
  /** The text */
  text: string;
  /** The cheked status */
  checked: boolean;
}

export interface IOptionalProps {}

export interface IProps extends Partial<IOptionalProps> {
  /** The todo object */
  todo: ITodo;
  /** The handler to control checked state */
  onClick: (todo: ITodo) => any;
}

export interface IState {}

export interface IContext {}
