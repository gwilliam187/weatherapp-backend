import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectUser } from '../actions/selectedUserActions';

class UserButton extends Component {

	// TODO: Implement this
	handleOnClick = () => {
		// console.log(`switch user to ${ this.props.username }`);
		this.props.selectUser(this.props.username);
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
	selectUser
};

export default connect(null, mapDispatchToProps)(UserButton);