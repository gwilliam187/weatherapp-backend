import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { addUser, removeUser, viewUserCities, removeCityFromUser, addCityToUser, updateCityToUser } from '../functions/couchFunctions';

import Home from './Home';

class App extends Component {
  componentDidMount(){
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
       	</Switch>
      </BrowserRouter>
    );
  }
}

export default App;
