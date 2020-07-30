import React from 'react';
import './App.css';
import List from './List.js';
import returnFilteredCardsAsArray from './helpers/returnFilteredCardsAsArray';

function App(props) {

  const lists = props.store.lists.map((item) => {
    return <List key={item.id} header={item.header} cards={returnFilteredCardsAsArray(item.cardIds, props.store.allCards)} />
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
