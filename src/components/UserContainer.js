import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInputContainer from './UserInputContainer';
import UserButton from './UserButton';

class UserContainer extends Component {
	renderUserButtons() {
		if(this.props.users.length > 0) {
			return this.props.users.map(user => {
				return <UserButton username={ user } key={ user } />;
			});
		} else {
			return <div>No users</div>
		}
	}

	render() {
		return(
			<div className='col-lg-3 UserContainer'>
				<div className='card'>
					<div className='card-body'>
						<h4 className='card-title'>Users</h4>
						<UserInputContainer />
						<label>All Users</label>
						<div className='list-group'>
							{ this.renderUserButtons() }
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.users
	};
};

export default connect(mapStateToProps, null)(UserContainer);