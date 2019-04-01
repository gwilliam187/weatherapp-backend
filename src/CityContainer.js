import React, { Component } from 'react';

import CityTableRow from './CityTableRow';

class CityContainer extends Component {
	render() {
		return (
			<div className='col-9 CityContainer'>
				<div className='card'>
					<div className='card-body'>
						<h4 className='card-title'>Cities for wowowi</h4>
						<table className='table mt-4'>
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