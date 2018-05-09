import React from 'react';

//title comes from App.js

const Header = ({ title }) => (
  <div className="header">
    <div>
      <h1 className="appTitle">{ title }</h1>
    </div>
  </div>
);

export default Header;
