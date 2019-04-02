import React, { Component } from 'react';

import UserInputContainer from './UserInputContainer';
import UserButton from './UserButton';

class UserContainer extends Component {
	render() {
		return(
			<div className='col-lg-3 UserContainer'>
				<div className='card'>
					<div className='card-body'>
						<h4 className='card-title'>Users</h4>
						<UserInputContainer />
						<label>All Users</label>
						<div className='list-group'>
							<UserButton username='steven_klarens' />
							<UserButton username='wowowi' />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UserContainer;