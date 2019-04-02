import React, { Component } from 'react';

class UserInputContainer extends Component {
	state = {
		value: ''
	};

	handleOnKeyDown = e => {
		if(e.key === 'Enter') {
			this.addUser();
		}
	};

	handleOnChange = e => { this.setState({ value: e.target.value.trim() }) };

	handleOnClick = e => { this.addUser() };

	// TODO: Implement this
	addUser = () => {
		if(this.state.value !== '') {
			console.log(`add user "${ this.state.value }"`);
			this.setState({ value: '' });
		}
	}

	render() {
		return (
			<div className='mb-4 UserInput'>
				<label>Add User</label>
				<div className='d-flex'>
					<input 
							type='text'
							value={ this.state.value }
							onKeyDown={ this.handleOnKeyDown }
							onChange={ this.handleOnChange } 
							className='form-control mr-2' />
					<button 
							onClick={ this.handleOnClick }
							className='btn btn-primary fw-40'>
						<i className='fas fa-plus text-white'></i>
					</button>
				</div>
			</div>
		);
	}
}

export default UserInputContainer;