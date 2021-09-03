import React from 'react';

import Timer from '../../сomponents/timer/Timer';
import Map from '../../сomponents/map/Map';
import Button from '../../сomponents/button/Button';

import StyleForHome from './Home.module.css';

class HomeView extends React.Component
{
    render()
    {
        return <div className={StyleForHome.home}>
            <Timer />
            <Map />;
            <Button />
        </div>
    }
}

export default HomeView;