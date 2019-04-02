import React, { Component } from 'react';

import UserContainer from './UserContainer';
import CityRevsContainer from './CityRevsContainer';

class Home extends Component {
	render() {
		return (
			<div className='container py-3 Home'>
				<div className='row'>
					<CityRevsContainer id={ this.props.match.params.id } />
				</div>
			</div>
		);
	}
}

export default Home;