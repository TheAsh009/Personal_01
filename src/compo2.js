import { Fragment } from "react";

function InputField() {
  return (
    <Fragment>
      <input id="inputMobile" type="text" placeholder="Mobile No ..." />
      <br />
      <input id="inputPassword" type="text" placeholder="Password ..." />
      <br />
    </Fragment>
  );
}

export default InputField;
