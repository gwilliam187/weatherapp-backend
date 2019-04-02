import React, { Component } from 'react';
import { connect } from 'react-redux';

import CityInputContainer from './CityInputContainer';
import CityTableRow from './CityTableRow';

class CityContainer extends Component {
	renderCities() {
		if(this.props.cities.length > 0) {
			return this.props.cities.map(city => {
				return <CityTableRow id={ city._id } cityName={ city.cityName } key={ city._id } />;
			});
		} else {
			return <div>No cities</div>
		}
	}

	renderConditionally() {
		if(this.props.selectedUser) {
			return (
				<div className='col-lg-9 CityContainer'>
					<div className='card'>
						<div className='card-body'>
							<div className='d-flex mb-4'>
								<h4 className='card-title mb-0 mr-auto'>Cities for { this.props.selectedUser }</h4>
								<button 
										className='btn btn-danger font-weight-bold align-self-end'>
										<i className='fas fa-trash-alt mr-2'></i>
										Delete user
								</button>
							</div>
							<CityInputContainer />
							<table className='table'>
								<thead className='thead-light'>
									<tr className='d-flex'>
										<th className='col-3'>ID</th>
										<th className='col-6'>City Name</th>
										<th className='col-3'></th>
									</tr>
								</thead>
								<tbody>
									{ this.renderCities() }
								</tbody>
							</table>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}

	render() {
		return this.renderConditionally();
	}
}

const mapStateToProps = state => {
	return {
		selectedUser: state.selectedUser,
		cities: state.cities
	};
};

export default connect(mapStateToProps, null)(CityContainer);