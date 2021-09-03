import React from 'react';

import StyleForCard from './Сard.module.css';

class CardView extends React.Component
{
    render()
    {
        return <div className= {StyleForCard.card}>
            card 
        </div> 
    }
}

export default CardView;