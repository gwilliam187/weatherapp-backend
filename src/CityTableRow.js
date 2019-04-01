import React, { Component } from 'react';

class CityTableRow extends Component {
	state = {
		isEditing: false
	};

	handleSwitchToEditButton = () => {
		this.setState({ isEditing: true });
	};

	handleSwitchToViewButton = () => {
		this.setState({ isEditing: false });
	};

	renderViewRow() {
		return (
			<tr className='d-flex'>
				<td className='col-3'>Berlin,de</td>
				<td className='col-6'>Berlin</td>
				<td className='col-3'>
					<button onClick={ this.handleSwitchToEditButton }>Edit</button>
					<button>Delete</button>
				</td>
			</tr>
		);
	}

	renderEditRow() {
		console.log('edit row')
		return (
			<tr className='d-flex'>
				<td className='col-3'><input value='Berlin,de' className='form-control' /></td>
				<td className='col-6'><input value='Berlin' className='form-control' /></td>
				<td className='col-3'>
					<button>Update</button>
					<button onClick={ this.handleSwitchToViewButton }>Cancel</button>
				</td>
			</tr>
		);
	}

	render() {
		if(!this.state.isEditing) {
			return this.renderViewRow();
		} else {
			return this.renderEditRow();
		}
	}
}

export default CityTableRow