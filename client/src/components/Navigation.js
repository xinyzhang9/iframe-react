import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <div className="header">
      <ul className="nav nav-pills pull-right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
      <h3 className="text-muted">Securing React</h3>
    </div>
  );
}

export default Navigation; 
