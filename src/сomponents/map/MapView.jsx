import React from 'react';

import StyleForCard from './Map.module.css';

import Card from '../card/Сard';

class MapView extends React.Component {
    constructor({ mapWhisCards }) {
        super();
        this.mapWhisCards = mapWhisCards;
    }

    render() {
        return <div className={StyleForCard.map}>
            {
                this.mapWhisCards.map(card => {
                    return <Card card={card} />
                })
            }
        </div>
    }
}

export default MapView;