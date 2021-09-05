import React from 'react';

import StyleForCard from './Сard.module.css';

class CardView extends React.Component {

    constructor({ card }) {
        super();
        this.card = card;
        console.log("card view");
    }

    render() {
        return <div key={this.card} className={StyleForCard.card}>
            {this.card}
        </div>
    }
}

export default CardView;