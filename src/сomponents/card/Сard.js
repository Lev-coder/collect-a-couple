import React from 'react';

import CardView from './СardView';

class Card extends React.Component {
    
    constructor({ card }) {
        super();

        this.card = card;
    }

    render() {
        return <CardView card={this.card} />
    }
}

export default Card;