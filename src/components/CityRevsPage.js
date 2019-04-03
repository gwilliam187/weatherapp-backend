import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserContainer from './UserContainer';
import CityRevsContainer from './CityRevsContainer';
import { fetchCityRevs } from '../actions/couchActions';

class Home extends Component {
	componentDidMount() {
		this.props.fetchCityRevs(this.props.match.params.id);
	}

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

const mapDispatchToProps = {
	fetchCityRevs
};

export default connect(null, mapDispatchToProps)(Home);