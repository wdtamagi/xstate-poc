import React from "react";

export const Footer = ({ remaining = 0 }) => {
  const buttonClass =
    "bg-transparent hover:bg-gray-400 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded";

  return (
    <div className="relative flex flex-row px-5 py-4 bg-gray-200 text-gray-600 text-xs">
      <span>{`${remaining} ${remaining > 1 ? "items" : "item"} left`}</span>
      <div className="absolute h-full inset-0 m-0 p-0 text-center">
        <button className={buttonClass}>All</button>
        <button className={buttonClass}>Active</button>
        <button className={buttonClass}>Completed</button>
      </div>
    </div>
  );
};
