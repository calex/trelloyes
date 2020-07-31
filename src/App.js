import React from 'react';
import './App.css';
import List from './List.js';

import returnFilteredCardsAsArray from './helpers/returnFilteredCardsAsArray';
import removeFromObject from './helpers/removeFromObject';

import STORE from './store.js';

class App extends React.Component {
  
  state = {
    listStore : STORE.lists,
    cardStore : STORE.allCards
  }

  handleDeleteItem = (itemId) => {
    const newLists = this.state.listStore.map((item) => {
      const newCardIds = item.cardIds.filter(item => item !== itemId);
      item.cardIds = newCardIds;

      return item;
    });

    const newAllCardsObject = removeFromObject(this.state.cardStore, itemId);
   
    this.setState({
      listStore: newLists,
      cardStore: newAllCardsObject
    })
  }

  addRandomCard = (listId) => {
    const getNewRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }

    const newCard = getNewRandomCard();
    const cardItems = this.state.cardStore;
    cardItems[newCard.id] = newCard;

    const newLists = this.state.listStore.map((item) => {
      if (item.id === listId) {
        item.cardIds.push(newCard.id);
      } 

      return item;
    });
    
    this.setState({
      cardStore: cardItems,
      listStore: newLists
    })
  }

  render() {

    const lists = this.state.listStore.map((item) => {
      return <List key={item.id} thisItemId={item.id} onAddRandomCard={this.addRandomCard} onDeleteItem={this.handleDeleteItem} header={item.header} cards={returnFilteredCardsAsArray(item.cardIds, this.state.cardStore)} />
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes</h1>
        </header>
        <div className="App-list">
          {!!this.state.listStore && lists}
        </div>
      </main>
    );
  }

}

export default App;
