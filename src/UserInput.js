import React, { Component } from 'react';

class UserInput extends Component {
	render() {
		return (
			<div className='mb-4 UserInput'>
				<label>Add User</label>
				<div className='d-flex'>
					<input type='text' className='form-control mr-2' />
					<button 
							className='btn btn-primary fw-40'>
						<i className='fas fa-plus text-white'></i>
					</button>
				</div>
			</div>
		)
	}
}

export default UserInput;