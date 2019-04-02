import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCityToUser } from '../actions/couchActions';

class CityInputContainer extends Component {
	state = {
		idVal: '',
		cityNameVal: ''
	};

	handleOnChangeId = e => {
		this.setState({ idVal: e.target.value.trim() });
	};

	handleOnChangeCityName = e => {
		this.setState({ cityNameVal: e.target.value });
	};

	handleOnKeyDown = e => {
		if(e.key === 'Enter') {
			this.addCity();
		}
	};

	handleOnClick = () => {
		this.addCity();
	};

	// TODO: Implement this
	addCity = () => {
		if(this.state.idVal !== '' && this.state.cityNameVal !== '') {
			console.log(`add city (${ this.state.idVal }) ${ this.state.cityNameVal }`);
			this.setState({ idVal: '', cityNameVal: '' });
			addCityToUser()
		}
	};

	render() {
		return (
			<div className='d-flex py-3'>
				<div className='col-3 pl-0'>
					<input
							type='text'
							value={ this.state.idVal }
							onKeyDown={ this.handleOnKeyDown }
							onChange={ this.handleOnChangeId } 
							className='form-control' />
				</div>
				<div className='col-7 pl-0'>
					<input
							type='text'
							value={ this.state.cityNameVal }
							onKeyDown={ this.handleOnKeyDown }
							onChange={ this.handleOnChangeCityName } 
							className='form-control' />
				</div>
				<div className='col-2 d-flex justify-content-end px-0'>
					<button className='btn btn-primary font-weight-bold w-100'>
						<i className='fas fa-plus text-white mr-2'></i>
						Add city
					</button>
				</div>
			</div>
		);
	}
}

export default connect(null) (CityInputContainer);