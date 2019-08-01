import React, { useCallback, useState } from 'react';

import './CardMatrix.scss';

const CardMatrix = props => {
  const [cardMatrixHeight, setCardMatrixHeight] = useState(null);

  const cardMatrixEl = useCallback(node => {
    if (node !== null) {
      setCardMatrixHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const numberPairs = [];

  for (let i = 1; i <= props.count; i++) {
    if (props.count % i === 0) {
      numberPairs.push([i, props.count / i]);
    }
  }

  const theNumberPair = numberPairs.find(numberPair => {
    return numberPair[0] - numberPair[1] >= 0;
  });

  const tr = [];
  const td = [];

  for (let i = 0; i < theNumberPair[0]; i++) {
    td.push(<div className='td' key={i} />);
  }

  for (let i = 0; i < theNumberPair[1]; i++) {
    tr.push(
      <div className='tr' key={i}>
        {td}
      </div>
    );
  }

  return (
    <div className='card-matrix' ref={cardMatrixEl}>
      <div
        className='table'
        style={{ height: cardMatrixHeight - 2, width: cardMatrixHeight - 2 }}>
        {tr}
      </div>
    </div>
  );
};

export default CardMatrix;
