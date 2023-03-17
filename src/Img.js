import { useState } from "react";
import "./style.css";
function Imgloader() {
  const [img, setImg] = useState(0);

  const imgArr = [
    "https://media.istockphoto.com/id/1291961188/photo/stunning-view-of-the-hawa-mahal-at-sunset-with-blurred-people-walking-during-the-covid-19.jpg?s=612x612&w=0&k=20&c=6au0sGRJARDE3Y6sjuZotM2aMJR3X2AUc9zUP37lcBk=",

    "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?s=612x612&w=is&k=20&c=6qnm00Jce_52P0-s_UASHwVuizEObuCOLf0Ol7_0hSw=",

    "https://media.istockphoto.com/id/938975958/photo/jal-mahal-water-palace-jaipur-rajasthan-with-landscape-at-sunset.jpg?s=612x612&w=is&k=20&c=2EJmxL6h-WtLiUfm2UOTU38pVRtUen2-E3fmo63Vq2c=",

    "https://www.patnabeats.com/wp-content/uploads/2021/05/3-1.jpeg",
  ];
  const imgHandler = () => {
    if (img == imgArr.length - 1) {
      setImg(0);
    } else {
      setImg(img + 1);
    }
  };
  return (
    <>
      <div className="parent">
        <div className="child">
          <img src={imgArr[img]} />
        </div>
        <div className="child">
          <button id="btn" onClick={imgHandler}>
            Click Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Imgloader;
