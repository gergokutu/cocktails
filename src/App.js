import React from 'react';
import './App.css';
import CocktailsListContainer from './components/CocktailsListContainer';
import { Route } from 'react-router-dom';
import CocktailsImagesContainer from './components/CocktailsImagesContainer';

function App() {
  return (
    <div className="App">
      <h1>COCKTAILS AROUND THE CLOCK</h1>
      <main>
        <Route exact path="/" component={CocktailsListContainer} />
        <Route path="/categories/:categoryName" component={CocktailsImagesContainer} />
      </main>
    </div>
  );
}

export default App;
