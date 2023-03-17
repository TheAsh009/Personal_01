import React from "react";
import "./../style.css";
const CharCount = () => {
  let [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");
  const [isDisable, setDisable] = React.useState(false);

  const textCount = (e) => {
    let values = e.target.value;
    let length = values.length;
    if (length <= 100) {
      setText(text);
      setCount((count = length));
    } else {
      setDisable(!isDisable);
    }
  };
  return (
    <div className="Count">
      <p>{count}</p>
      <textarea onChange={textCount} disabled={isDisable} />
    </div>
  );
};

export default CharCount;
