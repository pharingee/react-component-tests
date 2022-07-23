import React from "react";

interface Props {
  val: string;
  clickValue: (val: string) => void;
}

const KeyboardButton: React.FC<Props> = ({ val, clickValue }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    clickValue(val);
  };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "1rem 2rem",
        margin: "1rem",
        border: "1px solid gray",
      }}
      onClick={handleClick}
    >
      {val}
    </span>
  );
};

export default KeyboardButton;
