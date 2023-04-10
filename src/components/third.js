import { useState } from 'react';
export default function Greet() {
  let [count, setCount] = useState(0);
  const arrgreet = ['Hi', 'Hello', 'Wish u a happy birthday', 'good nigh'];
  const greetings = () => {
      
  };
  return (
    <div>
      <h1>{arrgreet[count]}</h1>
      <button onClick={greetings}>Click Me </button>
    </div>
  );
}
