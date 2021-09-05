import React from 'react';

import MapView from './MapView';

import RandomMapCreation from '../../services/map-creatos/RandomMapCreation';

class Map extends React.Component {
    constructor({ icons }) {
        super();
        this.mapWhisCards = new RandomMapCreation(icons, 3, 4).CreatMap();
    }
    render() {
        return <MapView mapWhisCards={this.mapWhisCards} />
    }
}

export default Map;