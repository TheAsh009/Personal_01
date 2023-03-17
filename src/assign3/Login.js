export default function Login() {
  function logInHandle() {
    alert("Log in successful");
  }
  return (
    <>
      <form>
        <input type="email" placeholder="Email Id" required />
        <br />
        <br />
        <input type="password" placeholder="Password.." required />
        <br />
        <br />
        <button type="submit" onClick={logInHandle}>
          {" "}
          Login
        </button>
        <br />
        <br />
      </form>
    </>
  );
}
