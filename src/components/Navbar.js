import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.navbar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export { Navbar };
