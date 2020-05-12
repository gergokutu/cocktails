import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CocktailDetails extends Component {
  render() {
    return (
      <div>
        <h2>DETAILS COMES HERE...</h2>
        <Link to="/">Go back to index</Link>
      </div>
    );
  }
}