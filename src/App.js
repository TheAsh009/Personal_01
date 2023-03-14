import { Fragment } from "react";
import Headingone from "./comp1";
import Heading2 from "./comp2";
import Heading3 from "./comp3";
import Btn from "./btn";
function App() {
  return (
    <Fragment>
      <Headingone />
      <Heading2 />
      <Heading3 />
      <Btn />

      <h1>I am Heading One ...From first Componant</h1>
      <h2>I am Heading Two ...From Second Componant</h2>
      <h3>I am Heading three ...from third Componant</h3>
      <button>Click Me!</button>
    </Fragment>
  );
}

export default App;
