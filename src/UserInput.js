import React, { Component } from 'react';

class UserInput extends Component {
	render() {
		return (
			<div className='mb-4 UserInput'>
				<label>Add User</label>
				<div className='d-flex'>
					<input type='text' className='form-control mr-2' />
					<button className=''>+</button>
				</div>
			</div>
		)
	}
}

export default UserInput;