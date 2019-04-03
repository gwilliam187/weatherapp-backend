import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { viewAllUsers, addUser, removeUser, viewUserCities, removeCityFromUser, addCityToUser, updateCityToUser } from '../actions/couchActions';

import Home from './Home';
import CityRevsPage from './CityRevsPage';

class App extends Component {
  componentDidMount(){
    //this.props.viewAllUsers();
    //addUser("peter_peter");
    //removeUser("peter_peter")
    //viewUserCities("steven_klarens")
    //removeCityFromUser("steven_klarens", "jakarta,id")
    //addCityToUser("steven_klarens", {cityName: "Jakarta", _id:"jakarta,id", isPublic: true})
    //updateCityToUser("steven_klarens", "jakarta,id", {cityName: "Jakarta-Wonderful_Indonesia", _id:"jakarta,id", isPublic: true})
  }

  render() {
    return (
      <BrowserRouter>
      	<Switch>
	        <Route exact path='/' component={ Home } />
          <Route path='/cityRevs/:id' component={ CityRevsPage }/>
       	</Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, {viewAllUsers}) (App);
