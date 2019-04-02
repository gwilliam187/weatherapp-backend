import React, { Component } from 'react';
import { connect } from 'react-redux';

import CityInputContainer from './CityInputContainer';
import CityTableRow from './CityTableRow';

class CityContainer extends Component {
	componentDidMount() {
		console.log('mouted')
	}

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
							<div className='d-flex flex-wrap mb-4'>
								<h4 className='offset-lg-3 col-lg-6 card-title text-center mb-2 mb-lg-0'>Cities for { this.props.selectedUser }</h4>
								<button 
										className='col-lg-3 btn btn-danger font-weight-bold align-self-end'>
										<i className='fas fa-trash-alt mr-2'></i>
										Delete user
								</button>
							</div>
							<CityInputContainer />
							<table className='table'>
								<thead className='thead-light'>
									<tr className='d-flex'>
										<th className='col-3'>ID</th>
										<th className='col-5'>City Name</th>
										<th className='col-4'></th>
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