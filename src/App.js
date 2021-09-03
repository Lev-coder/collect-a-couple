import React from 'react';

import StyleForApp from './App.module.css';

import Home from './pages/Home/Home';

class App extends React.Component
{
  render()
  {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
