import React from 'react';

import StyleForCard from './Map.module.css';

import Card from '../card/Сard';

class MapView extends React.Component
{
    render()
    {
        return <div className = {StyleForCard.map}>

            <Card/>
            <Card/>
            <Card/>
            
            <Card/>
            <Card/>
            <Card/>
            
            <Card/>
            <Card/>
            <Card/>

        </div>
    }
}

export default MapView;