
import { useState } from 'react';
export default function Events() {
  const [msg, setMsg] = useState([]);
  const mousehover = () => {
    setMsg([
      ...msg,
      { time: new Date().toLocaleString(), eventname: 'MouseHover', tag: 'h1' },
    ]);
    console.log(msg);
  };

  const mouseouts = () => {
    setMsg([
      ...msg,
      { time: new Date().toLocaleString(), eventname: 'Mouseout', tag: 'h2' },
    ]);
  };
  return (
    <>
      <h1 onMouseOver={mousehover} onMouseOut={mouseouts}>
        Hello
      </h1>
      <h2 onMouseOut={mouseouts} onMouseOver={mousehover}>
        Hey Guys
      </h2>
      <h2></h2>
      <div> </div>
      <table>
        <thead>
          <tr>
            <td>Time</td>
            <td>Event</td>
            <td>Tag</td>
          </tr>
        </thead>
        <tbody>
          {msg.map((el) => (
            <tr>
              <td> {el.time}</td>
              <td>{el.eventname}</td>
              <td>{el.tag}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
