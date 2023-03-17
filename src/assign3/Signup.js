export default function SignUp() {
  function CreateAccClick() {
    alert("Account has been Created");
  }
  return (
    <>
      <form>
        <input type="text" placeholder="First Name" />
        <br />
        <br />
        <input type="text" placeholder="Last Name" />
        <br />
        <br />
        <input type="email" placeholder="Enter Email" required />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" required />
        <br />
        <br />
        <button type="submit" onClick={CreateAccClick}>
          Sign Up
        </button>
        <br />
        <br />
      </form>
    </>
  );
}
