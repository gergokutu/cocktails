import React from 'react';
import './App.css';
import CocktailsListContainer from './components/CocktailsListContainer';
import { Route } from 'react-router-dom';
import CocktailsImages from './components/CocktailsImages';

function App() {
  return (
    <div className="App">
      <h1>COCKTAILS AROUND THE CLOCK</h1>
      <main>
        <Route exact path="/" component={CocktailsListContainer} />
        <Route path="/categories/:categoryName" component={CocktailsImages} />
      </main>
    </div>
  );
}

export default App;
