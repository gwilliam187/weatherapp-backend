import React, { Component } from 'react';

import UserInput from './UserInput';

class UserContainer extends Component {
	render() {
		return(
			<div className='col-3 UserContainer'>
				<div className='card'>
					<div className='card-body'>
						<h5 className='card-title'>Users</h5>
						<UserInput />
						<label>All Users</label>
						<div className='list-group'>
							<a href='#' className='list-group-item list-group-item-action'>steven_klarens</a>
							<a href='#' className='list-group-item list-group-item-action'>wowowi</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UserContainer;