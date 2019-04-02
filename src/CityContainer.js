import React, { Component } from 'react';

import CityInputContainer from './CityInputContainer';
import CityTableRow from './CityTableRow';

class CityContainer extends Component {
	render() {
		return (
			<div className='col-lg-9 CityContainer'>
				<div className='card'>
					<div className='card-body'>
						<div className='d-flex mb-4'>
							<h4 className='card-title mb-0 mr-auto'>Cities for wowowi</h4>
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
								<CityTableRow />
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default CityContainer;