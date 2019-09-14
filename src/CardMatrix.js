import React, { useCallback, useEffect, useState } from 'react';

import Card from './Card';

import './CardMatrix.scss';

const CardMatrix = props => {
  // props.cardCount : number of cards

  const [cardMatrix, setCardMatrix] = useState(null);
  const [cards, setCards] = useState({});
  const cardCount = props.cardCount;

  // Referencing the matrix
  const cardMatrixEl = useCallback(node => {
    if (node !== null) {
      setCardMatrix({
        height: node.getBoundingClientRect().height,
        width: node.getBoundingClientRect().width
      });
    }
  }, []);

  useEffect(() => {
    // Creating cards
    const cardList = [];

    for (let i = 0; i < cardCount; i += 2) {
      cardList[i] = {
        uuid: i,
        cid: i,
        flipped: false,
        matched: false
      };
      cardList[i + 1] = {
        uuid: i + 1,
        cid: i,
        flipped: false,
        matched: false
      };
    }

    setCards(shuffle(cardList));
  }, [cardCount]);

  /**
   * Shuffling array
   */
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  /**
   * Finding pairs of numbers with which the input count is divisilbe as a whole number
   */
  function getDivisions(count) {
    const divisionPairs = [];

    for (let i = 1; i <= props.cardCount; i++) {
      if (props.cardCount % i === 0) {
        divisionPairs.push([i, props.cardCount / i]);
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
   * Also assigning the cards to each matrix slot
   */
  function generateMatrix(numberPair) {
    if (!numberPair) return;
    if (!Object.keys(cards).length) return;

    const tr = [];
    const td = [];

    let i = 0;

    for (let i2 = 0; i2 < numberPair[1]; i2++) {
      td[i2] = [];
      for (let i3 = 0; i3 < numberPair[0]; i3++) {
        const cardUId = cards[i].uuid;
        const cardId = cards[i].cid;
        const cardFlipped = cards[i].flipped;
        td[i2].push(
          <div
            className='td'
            key={i}
            onClick={() => {
              handleCardClick(cardUId);
            }}>
            <Card flipped={cardFlipped} cardId={cardId} cardUId={cardUId} />
          </div>
        );
        i += 1;
      }
    }

    for (let i = 0; i < numberPair[1]; i++) {
      tr.push(
        <div className='tr' key={i}>
          {td[i]}
        </div>
      );
    }

    return tr;
  }

  // Flipping Card on click
  function handleCardClick(cardUId) {
    // Handling flipping state logic

    // Finding card index in cards haystack
    const cardArrayKey = cards.findIndex(elem => {
      return elem.uuid === cardUId;
    });

    // If card flipped already, nothing happens
    if (cards[cardArrayKey].flipped === true) return;

    // Getting the card flipped and not matched already
    let flippedCardIndex = null;
    const flippedCards = cards.filter((elem, index) => {
      if (elem.flipped === true && elem.matched === false) {
        flippedCardIndex = index;
        return elem;
      }
      return false;
    });

    if (flippedCards.length === 0) {
      // We flipped the first card

      flipCard(cardUId, true);
    } else if (flippedCards.length === 1) {
      // We flipped second card
      const firstCard = cards[flippedCardIndex];
      const secondCard = cards[cardArrayKey];

      if (flippedCards.length > 1) flipUnmatchedCards(false);

      // Is it a match?
      if (firstCard.cid === secondCard.cid) {
        // Its a match!

        // Flipping the actual card
        flipCard(cardUId, true);

        // Setting matched at card pair
        setMatch(firstCard.uuid, secondCard.uuid);
      } else {
        // No match

        // Flipping the actual card
        flipCard(cardUId, true);

        setTimeout(() => {
          // Flipping back all unmatched cards
          flipCard([firstCard.uuid, secondCard.uuid], false);
        }, 1000);
      }
    } else {
      // Flipping back all unmatched cards
      // if you want to flip a third card

      flipUnmatchedCards(false);
      flipCard(cardUId, true);
    }
  }

  // UUID can be number or array
  function flipCard(uuid, bool = true) {
    const newCards = [...cards];

    if (Array.isArray(uuid)) {
      cards.forEach((elem, index) => {
        if (uuid.indexOf(elem.uuid) >= 0) {
          newCards[index].flipped = bool;
        }
      });
    } else {
      const cardArrayKey = cards.findIndex(elem => {
        return elem.uuid === uuid;
      });

      newCards[cardArrayKey].flipped = bool;
    }

    setCards(newCards);
  }

  function flipUnmatchedCards(bool = true) {
    const newCards = [...cards];

    newCards.forEach(elem => {
      if (elem.flipped && !elem.matched) elem.flipped = bool;
    });

    setCards(newCards);
  }

  function setMatch(firstUId, secondUId) {
    const newCards = [...cards];

    newCards.forEach(elem => {
      if (elem.uuid === firstUId || elem.uuid === secondUId) {
        elem.matched = true;
      }
    });

    setCards(newCards);
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

  const divisions = getDivisions(props.cardCount);
  const closestPair = getClosestPair(divisions);
  const matrix = generateMatrix(closestPair);

  return (
    <div className='card-matrix' ref={cardMatrixEl}>
      <div
        className='table'
        style={
          cardMatrix ? styleTable(cardMatrix.width, cardMatrix.height) : null
        }>
        {matrix}
      </div>
    </div>
  );
};

export default CardMatrix;
