import React from 'react';

//title comes from App.js

const Header = ({ title }) => (
  <div className="instructions">
    <div>
      <h1 className="lead">{ title }</h1>
    </div>
  </div>
);

export default Header;
