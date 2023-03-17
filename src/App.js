import Imgloader from "./Img";
import CharCount from "./assign2/CharCounter";
import SignUp from "./assign3/Signup";
import Login from "./assign3/Login";
import "./style.css";
function App() {
  const [value, setValue] = useState(true);

  function handleClick() {
    setValue(!value);
  }

  return (
    <>
      <Imgloader />
      <CharCount />
      <br />
      <br />
      <div>
        {" "}
        <div>
          {value ? <SignUp /> : " "}
          {!value ? <Login /> : " "}
          {value ? (
            <button> Create Account</button>
          ) : (
            <button onClick={handleClick}> Create Account</button>
          )}
          {value ? (
            <button onClick={handleClick}> SignIn/ Login</button>
          ) : (
            <button> SignIn/ Login</button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
