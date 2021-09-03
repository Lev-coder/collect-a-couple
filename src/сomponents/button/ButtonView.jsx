import React from 'react';

import StyleForButton from './Button.module.css';

class ButtonView extends React.Component
{
    render()
    {
        return <div className={StyleForButton.button}>
            button
        </div>
    }
}

export default ButtonView;