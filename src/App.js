import "./App.css";
import { Fragment } from "react";
import Heading from "./compo1";
import InputField from "./compo2";
import BtnSubmit from "./compo3";

function App() {
  return (
    <Fragment>
      <div className="container">
        {/* <div>
          <h1>Register hear ...</h1>
        </div>
        <div>
          <input id="inputMobile" type="text" placeholder="Mobile No ..." />
          <br />
          <input id="inputPassword" type="text" placeholder="Password ..." />
        </div>
        <div id="btnSubmit">
          <button>Submit</button>
        </div> */}
        <Heading headingText={"Register hear ..."} />
        <InputField />
        <BtnSubmit btnText={"Submit"} />
      </div>
    </Fragment>
  );
}

export default App;
