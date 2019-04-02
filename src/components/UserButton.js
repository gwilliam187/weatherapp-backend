import React, { Component } from 'react';

class UserButton extends Component {

	// TODO: Implement this
	handleOnClick = () => {
		console.log(`switch user to ${ this.props.username }`);
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

export default UserButton;