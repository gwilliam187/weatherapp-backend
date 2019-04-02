import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/couchActions';

class UserInputContainer extends Component {
	state = {
		value: ''
	};

	handleOnKeyDown = e => {
		if(e.key === 'Enter') {
			this.props.addUser();
		}
	};

	handleOnChange = e => { this.setState({ value: e.target.value.trim() }) };

	handleOnClick = e => { this.add() };

	// TODO: Implement this
	add = () => {
		if(this.state.value !== '') {
			this.props.addUser(this.state.value)
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

export default connect(null, {addUser}) (UserInputContainer);