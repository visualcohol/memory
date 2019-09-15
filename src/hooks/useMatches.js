function useMatches(cards) {
  let matchedCards = null;

  matchedCards = cards.filter(elem => {
    return elem.matched === true;
  });

  return matchedCards;
}

export { useMatches };
