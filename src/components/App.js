import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from './Login';

import { addUser, removeUser, viewUserCities } from '../functions/couchFunctions';

class App extends React.Component{
    componentDidMount(){
        addUser("david_thomas");
        //removeUser("david_thomas");
        //viewUserCities("steven_klarens")
    }

    render(){
        return(
            <BrowserRouter>
				<Switch>
					<Route exact path="/" component={ Login } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;