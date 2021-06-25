import React from "react";
import { useState } from "react";

const QuestionForm = () => {
  const [inputValue, setInputValue] = useState("Poser votre question !");
  const checkValue = (value) => {
    if (!value.includes("f")) {
      setInputValue(value);
    }
  };

  return (
    <diV>
      <textarea
        value={inputValue}
        onChange={(e) => checkValue(e.target.value)}
      ></textarea>
      <button onClick={() => alert(inputValue)}>Alertez moi !</button>
    </diV>
  );
};

export default QuestionForm;
