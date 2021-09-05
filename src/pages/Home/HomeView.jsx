import React from 'react';

import Timer from '../../сomponents/timer/Timer';
import Map from '../../сomponents/map/Map';
import Button from '../../сomponents/button/Button';

import StyleForHome from './Home.module.css';

class HomeView extends React.Component {

    constructor({ icons }) {
        super();
        this.icons = icons;
    }

    render() {
        return <div className={StyleForHome.home}>
            <Timer />
            <Map icons={this.icons} />
            <Button />
        </div>
    }
}

export default HomeView;