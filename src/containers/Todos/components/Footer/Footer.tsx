import React from "react";

const Footer = ({ remaining = 0 }) => {
  const buttonClass =
    "bg-transparent hover:bg-gray-400 text-gray-600 font-semibold hover:text-white py-2 px-4 rounded";

  return (
    <div className="relative flex flex-row justify-between items-center px-5 py-4 bg-gray-200 text-gray-600 text-xs">
      <span>{`${remaining} ${remaining > 1 ? "items" : "item"} left`}</span>
      <div className="absolute h-full inset-0 m-0 p-0 text-center px-5 py-4">
        <button style={{ outline: "none" }} className={buttonClass}>
          All
        </button>
        <button style={{ outline: "none" }} className={buttonClass}>
          Active
        </button>
        <button style={{ outline: "none" }} className={buttonClass}>
          Completed
        </button>
      </div>
      <button style={{ outline: "none" }} className={`${buttonClass} z-10`}>
        Clear completed
      </button>
    </div>
  );
};

export default Footer;
