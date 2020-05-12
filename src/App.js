import React from 'react';
import './App.css';
import CocktailsListContainer from './components/CocktailsListContainer';
import { Route } from 'react-router-dom';
import CocktailsImagesContainer from './components/CocktailsImagesContainer';
import CocktailDetails from './components/CocktailDetails';

function App() {
  return (
    <div className="App">
      <h1>COCKTAILS AROUND THE CLOCK</h1>
      <main>
        <Route exact path="/" component={CocktailsListContainer} />
        <Route path="/categories/:categoryName" component={CocktailsImagesContainer} />
        <Route path="/cocktails/:cocktailID" component={CocktailDetails} />
      </main>
    </div>
  );
}

export default App;
