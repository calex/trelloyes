import React from 'react';
import './App.css';
import List from './List.js';

function App(props) {

  function returnFilteredCardsAsArray(cardIds) {

    const allCards = props.store.allCards;

    const filteredCardsItems = Object.keys(allCards) //get keys from all cards
      .filter(key => cardIds.includes(key)) // filter down to only those that cardIds includes
      .reduce((obj, key) => { // now that we have that filtered array, we can pass keys from it into reduce
        obj[key] = allCards[key]; // build a new object with only the allowed items, looking them up in allCards
        return obj; //return the accumulated object (accumulator)
      }, {}); //initial value is empty object

    return Object.values(filteredCardsItems); // creates an array of values in the object; we don't need their keys
  }

  const lists = props.store.lists.map((item) => {
    return <List key={item.id} header={item.header} cards={returnFilteredCardsAsArray(item.cardIds)} />
  });

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;
