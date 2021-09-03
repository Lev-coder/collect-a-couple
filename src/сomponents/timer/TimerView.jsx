import React from 'react';

import StyleForTimer from './Timer.module.css';

class TimerView extends React.Component
{
    render()
    {
        return <div className={StyleForTimer.timer}>
            Timer
        </div>
    }
}

export default TimerView;