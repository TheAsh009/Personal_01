import { useState } from "react";
const Componant = function () {
  const [text, updatedText] = useState(true);
  const Changename = () => {
    updatedText(!text);
  };

  return (
    <>
      {text ? <h1>My Name is Amit</h1> : <h1>My Name is Rajan</h1>}

      <button onClick={Changename}>Change the Name</button>
    </>
  );
};

export default Componant;
