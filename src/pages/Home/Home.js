import React from 'react';

import icons from '../../data';

import HomeView from './HomeView';

class Home extends React.Component
{
    render()
    {
        return <HomeView icons ={icons}/>
    }
}

export default Home;