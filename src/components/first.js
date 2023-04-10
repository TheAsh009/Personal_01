import { useState } from "react";

function First() {
  let random = Math.floor(Math.random() * 10) + 1;
  let [num, setNum] = useState(0);
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function randomgenerate() {
    setNum(random);
  }
  return (
    <div>
      <h1>Random Number That is Generating {num}</h1>
      <button onClick={randomgenerate}>Generate no</button>

      <table>
        <thead>
          <tr>
            <th>multiplyer</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {numbers.map((element, index) => (
            <tr>
              <td>{element}</td>
              <td>{element * num}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default First;
