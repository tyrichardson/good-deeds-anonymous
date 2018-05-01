import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/read">
            Read
          </Link>
        </li>
        <li>
          <Link to="/write">
            Write
          </Link>
        </li>
        <li>
          <Link to="/archive">
            Archive
          </Link>
        </li>
        <li>
          <Link to="/login">
            Sign-in
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
