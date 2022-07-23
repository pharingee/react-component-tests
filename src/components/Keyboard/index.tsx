import React from "react";
import KeyboardButton from "./KeyboardButton";

interface Props {
  addValue: (val: string) => void;
  removeLastValue: () => void;
}

interface NumRowProps {
  numbers: string[];
  addValue: (val: string) => void;
}

const NumberRow: React.FC<NumRowProps> = ({ numbers, addValue }) => (
  <div>
    {numbers.map((val) => (
      <KeyboardButton val={val} clickValue={addValue} />
    ))}
  </div>
);

const Keyboard: React.FC<Props> = ({ addValue, removeLastValue }) => {
  return (
    <>
      {[
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
      ].map((row) => (
        <NumberRow numbers={row} addValue={addValue} />
      ))}
      <div>
        <KeyboardButton val={'.'} clickValue={addValue} />
        <KeyboardButton val={'0'} clickValue={addValue} />
        <KeyboardButton val={'Del'} clickValue={removeLastValue} />
      </div>
    </>
  );
};

export default Keyboard;
