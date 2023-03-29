import React from "react";
import { useState } from "react";
const GenerateNo = function () {
  const [inputNum, setinputNo] = useState("");
  const [rdno, setRandom] = useState(ran());
  const [msg, setMsg] = useState("");
  const [count, setCount] = useState(0);
  function ran() {
    return Math.trunc(Math.random() * 20) + 1;
  }

  function getmsg(inputNum, rdno) {
    const gussNo = +inputNum;
    if (gussNo < rdno) return "To Low";
    if (gussNo > rdno) return "To high";
    if (gussNo === rdno) {
      setRandom(ran());
      return "Congratulation";
    }
  }

  function checkguess() {
    setMsg(getmsg(inputNum, rdno));
    setCount(count + 1);
  }

  return (
    <>
      <h1>Guess The No from 1 to 20 </h1>
      <input
        type="number"
        value={inputNum}
        onChange={(e) => {
          setinputNo(e.target.value);
        }}
        placeholder="Guess the Lucky Number"
      />
      &nbsp;
      <button onClick={checkguess}>Click Me</button>
      <h3>
        {msg} {count}
      </h3>
    </>
  );
};

export default GenerateNo;
