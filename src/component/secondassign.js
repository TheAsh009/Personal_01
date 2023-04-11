import { useState } from "react";
export default function SecondAssign() {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");
  const [email, setEmail] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleHobby(e) {
    setHobby(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleAdd(e) {
    e.preventDefault();
    setData([
      ...data,
      {
        name,
        age,
        hobby,
        email,
      },
    ]);
    setName("");
    setAge("");
    setEmail("");
    setHobby("");
  }

  function handleDelete(id) {
    const newData = data.filter((el) => el.email !== id);
    setData(newData);
  }

  return (
    <div className="Main">
      <div className="Twosection">
        <div className="Form-Data">
          <h4>Enter Unique Email Id</h4>
          <form>
            <input
              type="text"
              onChange={(e) => handleName(e)}
              value={name}
              placeholder="Enter Your Name"
            />

            <input
              type="number"
              onChange={(e) => handleAge(e)}
              value={age}
              placeholder="Enter your Age"
            />

            <input
              onChange={(e) => handleHobby(e)}
              type="text"
              value={hobby}
              placeholder="Enter your hobbies"
            />

            <input
              type="email"
              onChange={(e) => handleEmail(e)}
              value={email}
              placeholder="Enter your Email"
            />

            <button onClick={handleAdd}>Add data</button>
          </form>
        </div>

        <div className="Corresponding-FormData">
          <h4>Name : {name}</h4>
          <h4>Age : {age}</h4>
          <h4>Hobby : {hobby}</h4>
          <h4>Email : {email}</h4>
        </div>
      </div>

      <div className="Output">
        {data.map((x) => {
          return (
            <p>
              <span>
                {x.name}- {x.age}-{x.hobby} -{x.email}
                <span onClick={() => handleDelete(x.email)}>❌</span>
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
