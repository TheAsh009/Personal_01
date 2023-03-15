import { useState } from "react";
const Componant3 = function () {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState();

  const getText = function (event) {
    setText(event.target.value);
  };
  const clickme = function () {
    setArr([...arr, text]);
  };
  return (
    <>
      <input type="text" value={text} onChange={getText} />
      <br />
      <button onClick={clickme}>Click Me</button>
      <ul>
        {arr.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>
    </>
  );
};
export default Componant3;
