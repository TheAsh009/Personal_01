import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import style from "./Context.module.css";
const usersContext = React.createContext();

function ContextAssignment() {
  const [user, setDataUser] = useState([]);
  const [userById, setUserById] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setDataUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleUser = (id) => {
    console.log("user click" + id);

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setUserById(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  function UserDetails() {
    const { userById } = useContext(usersContext);

    if (!userById) return null;
    return (
      <div className={style.userDetails}>
        <h3>User Details</h3>
        <h1>Id : {userById.id}</h1>
        <p>User Id : {userById.userId}</p>
        <p>Title : {userById.title}</p>
        <p>Body : {userById.body}</p>
      </div>
    );
  }
  const values = {
    user,
    userById,
  };

  function ShowData(props) {
    const { user } = useContext(usersContext);
    return (
      <div className={style.first}>
        <h2>Post List</h2>
        {user.map((el) => {
          return (
            <tr className={style.trr} key={el.id}>
              <td className={style.tdd}>
                <button
                  className={style.buttun}
                  onClick={() => handleUser(el.id)}
                >
                  {el.title}
                </button>
              </td>
            </tr>
          );
        })}
      </div>
    );
  }

  return (
    <div className={style.main}>
      <usersContext.Provider value={values}>
        <ShowData />
        <UserDetails />
      </usersContext.Provider>
    </div>
  );
}

export default ContextAssignment;