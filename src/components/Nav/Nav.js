import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
        <ul>
        <li>
          <Link to="/read">
            Public Reading Page
          </Link>
        </li>
        </ul>
      <ul>
        <li>
            <Link to="/login">
              Sign-in
            </Link>
          </li>
      </ul>
      <ul>
        <li>
          <Link to="/readWriter">
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
      </ul>
    </div>
  </div>
);

export default Nav;
