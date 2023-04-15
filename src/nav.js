import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = function () {
  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
