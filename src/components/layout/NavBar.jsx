import React from "react";
import { Link } from 'react-router-dom';

function NavBar = () =>
  return (
    <div className='appContainer'>
      <ul className='navContainer'>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
