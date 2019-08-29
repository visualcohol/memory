import React, { useCallback, useState } from 'react';

import './CardMatrix.scss';

const CardMatrix = props => {
  // props.count : number of cards

  const [cardMatrix, setCardMatrix] = useState(null);

  // Referencing the matrix
  const cardMatrixEl = useCallback(node => {
    if (node !== null) {
      setCardMatrix({
        height: node.getBoundingClientRect().height,
        width: node.getBoundingClientRect().width
      });
    }

    console.log('cb');
  }, []);

  /**
   * Finding pairs of numbers with which the input count is divisilbe as a whole number
   */
  function getDivisions(count) {
    const divisionPairs = [];

    for (let i = 1; i <= props.count; i++) {
      if (props.count % i === 0) {
        divisionPairs.push([i, props.count / i]);
      }
    }

    return divisionPairs;
  }

  /**
   * Finding the pair of numbers which are closest to each other
   */
  function getClosestPair(numberPairs) {
    const closestPair = numberPairs.find(numberPair => {
      return numberPair[0] - numberPair[1] >= 0;
    });

    return closestPair;
  }

  /**
   * Generating matrix table
   */
  function generateMatrix(numberPair) {
    const tr = [];
    const td = [];

    for (let i = 0; i < numberPair[0]; i++) {
      td.push(<div className='td' key={i} />);
    }

    for (let i = 0; i < numberPair[1]; i++) {
      tr.push(
        <div className='tr' key={i}>
          {td}
        </div>
      );
    }

    return tr;
  }

  /**
   * Generating the table style.
   * It needs to have the maximum width or length whichever fits on the screen.
   */
  function styleTable(width, height) {
    let size = width;

    if (width > height) {
      size = height;
    } else if (width < height) {
      size = width;
    }

    return {
      width: size,
      height: size
    };
  }

  const divisions = getDivisions(props.count);
  const closestPair = getClosestPair(divisions);

  return (
    <div className='card-matrix' ref={cardMatrixEl}>
      <div
        className='table'
        style={
          cardMatrix ? styleTable(cardMatrix.width, cardMatrix.height) : null
        }>
        {generateMatrix(closestPair)}
      </div>
    </div>
  );
};

export default CardMatrix;
