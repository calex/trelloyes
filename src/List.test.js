import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List.js';
import returnFilteredCardsAsArray from './helpers/returnFilteredCardsAsArray';
import STORE from './store.js';

const allCards = STORE.allCards;

const testCardObjectsArray = [
    { id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
    { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
    { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
    { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
    { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
    { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
];

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key={'1'} header={'First list'} cards={returnFilteredCardsAsArray([ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ], allCards)} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('helper function should return card objects', () => {
        const input = [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ];
        const expectedOutput = testCardObjectsArray;
        expect(returnFilteredCardsAsArray(input, allCards)).toEqual(expectedOutput);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List key={'1'} header={'First list'} cards={returnFilteredCardsAsArray([ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ], allCards)}  />)
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});
