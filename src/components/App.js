import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { viewAllUsers, addUser, removeUser, viewUserCities, removeCityFromUser, addCityToUser, updateCityToUser } from '../actions/couchActions';

import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<Switch>
	        <Route exact path='/' component={ Home } />
       	</Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, {viewAllUsers}) (App);
