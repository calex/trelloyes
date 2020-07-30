function returnFilteredCardsAsArray(cardIds, allCards) {
    const filteredCardsItems = Object.keys(allCards) //get keys from all cards
      .filter(key => cardIds.includes(key)) // filter down to only those that cardIds includes
      .reduce((obj, key) => { // now that we have that filtered array, we can pass keys from it into reduce
        obj[key] = allCards[key]; // build a new object with only the allowed items, looking them up in allCards
        return obj; //return the accumulated object (accumulator)
      }, {}); //initial value is empty object

    return Object.values(filteredCardsItems); // creates an array of values in the object; we don't need their keys
}

export default returnFilteredCardsAsArray;