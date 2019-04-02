import React, { Component } from 'react';

import UserContainer from './UserContainer';
import CityContainer from './CityContainer';

class Home extends Component {
	render() {
		return (
			<div className='container py-3 Home'>
				<div className='row'>
					<UserContainer />
					<CityContainer />
				</div>
			</div>
		);
	}
}

export default Home;