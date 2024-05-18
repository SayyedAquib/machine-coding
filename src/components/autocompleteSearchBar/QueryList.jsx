import React from "react";

const QueryList = ({ setData, data }) => {
  const handleClick = (data) => {
    setData(data);
  };

  return (
    <li
      className="w-1/3 pl-5 py-2 shadow-xl rounded-full hover:bg-gray-100"
      onMouseDown={() => handleClick(data)}
    >
      🔍 {data}
    </li>
  );
};

export default QueryList;
