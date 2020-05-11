import React from 'react';
import './App.css';
import CocktailsListContainer from './components/CocktailsListContainer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>COCKTAILS AROUND THE CLOCK</h1>
      <main>
        <Route component={CocktailsListContainer} />
      </main>
    </div>
  );
}

export default App;
