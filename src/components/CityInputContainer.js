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
		console.log("adding "+this.state.idVal)
		if(this.state.idVal !== '' && this.state.cityNameVal !== '') {
			console.log(`add city (${ this.state.idVal }) ${ this.state.cityNameVal }`);
			const cityObj = {
				_id: this.state.idVal,
				cityName: this.state.cityNameVal,
				isPublic: true
			}
			this.props.addCityToUser(this.props.selectedUser, cityObj)
			this.setState({ idVal: '', cityNameVal: '' });
		}
	};

	render() {
		return (
			<div className='d-flex flex-wrap py-3'>
				<div className='col-md-3 pl-md-0 mb-2 mb-md-0'>
					<input
							type='text'
							value={ this.state.idVal }
							placeholder='ID (e.g. berlin,de)'
							onKeyDown={ this.handleOnKeyDown }
							onChange={ this.handleOnChangeId } 
							className='form-control' />
				</div>
				<div className='col-md-7 pl-md-0 mb-2 mb-md-0'>
					<input
							type='text'
							value={ this.state.cityNameVal }
							placeholder='City Name (e.g. Berlin)'
							onKeyDown={ this.handleOnKeyDown }
							onChange={ this.handleOnChangeCityName } 
							className='form-control' />
				</div>
				<div className='col-md-2 d-flex justify-content-end px-md-0'>
					<button className='btn btn-primary font-weight-bold w-100' onClick={this.handleOnClick}>
						<i className='fas fa-plus text-white mr-2'></i>
						Add city
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
	return{
		selectedUser: state.selectedUser
	}
}

export default connect(mapStateToProps, {addCityToUser}) (CityInputContainer);