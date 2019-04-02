import React, { Component } from 'react';

class CityInputContainer extends Component {
	render() {
		return (
			<div className='d-flex py-3'>
				<div className='col-3 pl-0'><input className='form-control' /></div>
				<div className='col-7 pl-0'><input className='form-control' /></div>
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

export default CityInputContainer;