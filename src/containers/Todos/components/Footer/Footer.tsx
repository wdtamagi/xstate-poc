import React from "react";
import { IProps } from "./types";

const Footer = ({
  remaining,
  activeView,
  onChangeView,
  anyTodoDone,
}: IProps) => {
  const getButtonClass = (active: boolean = false) =>
    `hover:bg-gray-400 font-semibold hover:text-white py-2 px-4 text-xs rounded ${
      active ? "bg-gray-400 text-white" : "bg-transparent text-gray-600"
    }`;

  return (
    <div className="relative flex flex-col px-5 py-4 bg-gray-200">
      <div className="flex flex-row justify-between items-center text-gray-600 text-xs w-full pb-2 sm:pb-0">
        <span className="py-2">{`${remaining} left`}</span>
        {anyTodoDone && (
          <button
            style={{ outline: "none" }}
            className={`${getButtonClass()} z-10`}
          >
            Clear completed
          </button>
        )}
      </div>
      <div
        className="pt-4 text-center w-full sm:absolute sm:h-full sm:inset-0 sm:px-5 sm:py-4"
        style={{ borderTop: "1px solid #bdc2ca5e" }}
      >
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
    </div>
  );
};

export default Footer;
