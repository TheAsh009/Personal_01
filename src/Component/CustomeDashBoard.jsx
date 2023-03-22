import React from 'react'
import styles from "./CustomeDashBoard.module.css"
import { BsFillPlayCircleFill } from "react-icons/bs";

const CustomeDashBoard = () => {
  return (
    <div className={styles.CustomeDashBoardContainer}>
      <div className={styles.leftContainer}>
        <p>totally free</p>
        <h2>Let's bring your team together in onclick</h2>
        <p>we hekp you to manage all of your Work and daily task in offce</p>

        <div className={styles.buttonPauseText}>
          <button>Get Started</button>
          <BsFillPlayCircleFill className={styles.Pauseicon} />
          <p>How to use</p>
        </div>
      </div>
    </div>
  )
}

export default CustomeDashBoard