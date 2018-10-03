import React from 'react';

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <h1>{props.title}</h1>
      <p className="lead">Kickin' it old school.</p>
    </div>
  );
}

export default Jumbotron; 
