import React from "react";

interface IFooterProps {
  /** The remainings todos*/
  remaining: number;
  /** The active view */
  activeView: string;
  /** The handler to control active view */
  onChangeView: (view: string) => void;
  /** The control for clear button */
  anyTodoDone: boolean;
}

const Footer = ({
  remaining,
  activeView,
  onChangeView,
  anyTodoDone,
}: IFooterProps) => {
  const getButtonClass = (active: boolean = false) =>
    `hover:bg-gray-400 font-semibold hover:text-white py-2 px-4 rounded ${
      active ? "bg-gray-400 text-white" : "bg-transparent text-gray-600"
    }`;

  return (
    <div className="relative flex flex-row justify-between items-center px-5 py-4 bg-gray-200 text-gray-600 text-xs">
      <span>{`${remaining} ${remaining > 1 ? "items" : "item"} left`}</span>
      <div className="absolute h-full inset-0 m-0 p-0 text-center px-5 py-4">
        <button
          style={{ outline: "none" }}
          className={getButtonClass(activeView === "all")}
          onClick={() => onChangeView("all")}
        >
          All
        </button>
        <button
          style={{ outline: "none" }}
          className={getButtonClass(activeView === "active")}
          onClick={() => onChangeView("active")}
        >
          Active
        </button>
        <button
          style={{ outline: "none" }}
          className={getButtonClass(activeView === "completed")}
          onClick={() => onChangeView("completed")}
        >
          Completed
        </button>
      </div>
      {anyTodoDone && (
        <button
          style={{ outline: "none" }}
          className={`${getButtonClass()} z-10`}
        >
          Clear completed
        </button>
      )}
    </div>
  );
};

export default Footer;
