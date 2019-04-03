import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectUser } from '../actions/selectedUserActions';
import { viewUserCities } from '../actions/couchActions';

class UserButton extends Component {
	
	handleOnClick = () => {
		this.props.selectUser(this.props.username);
		this.props.viewUserCities(this.props.username);
	};

	render() {
		return (
			<button
					onClick={ this.handleOnClick }
					className='list-group-item list-group-item-action'>
				{ this.props.username }
			</button>
		);
	}
}

const mapDispatchToProps = {
	selectUser, viewUserCities
};

export default connect(null, mapDispatchToProps)(UserButton);