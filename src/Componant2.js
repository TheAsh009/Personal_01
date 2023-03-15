import { useState } from "react";
const Componant2 = () => {
  const [element, updated] = useState(0);

  const increment = () => {
    updated(element + 1);
  };
  const Decrment = () => {
    updated(element >= 1 ? element - 1 : element);
  };
  return (
    <>
      <p>{element}</p>
      <button onClick={increment}>Increse Count</button>

      <button onClick={Decrment}>Decreese Count</button>
    </>
  );
};
export default Componant2;
