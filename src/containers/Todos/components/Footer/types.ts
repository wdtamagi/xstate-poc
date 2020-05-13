import { Show } from "../../types";

export interface IOptionalProps {}

export interface IProps extends Partial<IOptionalProps> {
  /** The remainings todos count*/
  remaining: number;
  /** The active view */
  activeView: string;
  /** The handler to control active view */
  onChangeView: (view: Show) => void;
  /** The control for clear button */
  anyTodoDone: boolean;
}

export interface IState {}

export interface IContext {}
