import React from "react";

const TextTable = ({ sub, title }) => {
  return (
    <div className="text-container">
      <div className="text-sub-title">{sub}</div>
      <div className="text-title">{title}</div>
      <div className="text-line"></div>
    </div>
  );
};

export default TextTable;
