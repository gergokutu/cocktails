import React from 'react';
import './styles/App.css';
import CocktailsListContainer from './components/CocktailsListContainer';
import { Route } from 'react-router-dom';
import CocktailsImagesContainer from './components/CocktailsImagesContainer';
import CocktailDetailsContainer from './components/CocktailDetailsContainer';

function App() {
  return (
    <div className="App">
      <h1> <i class="fas fa-cocktail"></i> COCKTAILS AROUND THE CLOCK <i class="fas fa-cocktail"></i> </h1>
      <main>
        <Route exact path="/" component={CocktailsListContainer} />
        <Route path="/categories/:categoryName" component={CocktailsImagesContainer} />
        <Route path="/cocktails/:cocktailID" component={CocktailDetailsContainer} />
      </main>
    </div>
  );
}

export default App;
