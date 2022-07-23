import React, { useState, useEffect } from "react";

import Keyboard from "../Keyboard";

const PhoneNumberEntry = () => {
  const [number, setNumber] = useState("");
  const [clipText, setClipText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      window.navigator.clipboard.readText().then((text) => {
        if (!isNaN(parseInt(text))) {
          setClipText(text);
        } else {
          setClipText('');
        }
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const addValue = (value: string) => {
    setNumber(`${number}${value}`);
  };

  const removeLastValue = () => {
    setNumber(number.slice(0, -1));
  };

  const paste = () => setNumber(clipText);

  return (
    <>
      <div>
        <span
          style={{
            border: "1px solid #ddd",
            display: "inline-block",
            padding: "1rem 2rem",
          }}
        >
          +233{" "}
          <span style={{ display: "inline-block", padding: "1rem 2rem" }}>
            {number}
          </span>
        </span>
      </div>
      {clipText && !number.includes(clipText) ? <div onClick={paste}>Paste {clipText} in textbox</div> : null}
      <Keyboard addValue={addValue} removeLastValue={removeLastValue} />
    </>
  );
};

export default PhoneNumberEntry;
