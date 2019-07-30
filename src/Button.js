import React from 'react';

import './Button.scss';

const Button = props => {
  // Default config values
  const config = {
    size: 'medium',
    color: 'blue'
  };

  return (
    <button className={'button ' + getClassName(props)}>{props.text}</button>
  );

  // Generate className string from props
  function getClassName(props) {
    let classArray = [];

    classArray.push(props.size ? props.size : config.size); // Size
    classArray.push(props.color ? props.color : config.color); // Color

    return classArray.join(' ');
  }
};

export default Button;
