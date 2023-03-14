import Card from "./Card";
import "./App.css";
import "./Card.css";
export default function App() {
  const User1 = {
    name: "Amit",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    designation: "Graphic Desinger",
    description: "Highly Creative graphic designer",
  };
  const User2 = {
    name: "Ruhi",
    image:
      "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    designation: "Singer",
    description: "Perform Varity of music",
  };

  return (
    <div className="App">
      <header className="App-header">
        <Card obj={User1} />
        <br />
        <Card obj={User2} />
      </header>
    </div>
  );
}

// export default App;
