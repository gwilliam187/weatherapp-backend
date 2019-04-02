import React, { Component } from 'react';
import { connect } from 'react-redux';

import CityInputContainer from './CityInputContainer';
import CityTableRow from './CityTableRow';

import { viewUserCities } from '../actions/couchActions';


class CityContainer extends Component {
	componentWillMount() {
		this.props.viewUserCities(this.props.selectedUser)
		console.log(this.props.cities)
	}

	renderCities() {
		if(this.props.cities.total_rows > 0) {
			return this.props.cities.rows.map(city => {
				return <CityTableRow id={ city.id } cityName={ city.value } key={ city.key } />;
			});
		} else {
			return <tr><td colSpan='4' style={{textAlign: "center"}}>No Cities Loaded Yet</td></tr>
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
		cities: state.userCities
	};
};

export default connect(mapStateToProps, {viewUserCities})(CityContainer);