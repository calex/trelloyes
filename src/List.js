import React from 'react';
import Card from './Card.js';
import './List.css';

export default function List(props) {

    const cardEls = props.cards.map((card) => {
        return <Card key={card.id} thisItemId={card.id} title={card.title} content={card.content} onDeleteItem={props.onDeleteItem} />
    });

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
                <button onClick={() => props.onAddRandomCard(props.thisItemId)}>+ Add Random Card</button>
            </header>
            <div className="List-cards">
                {!!props.cards && cardEls}
            </div>
        </section>
    );
}

List.defaultProps = {
    cards: [],
    header: '',
    key: ''
}