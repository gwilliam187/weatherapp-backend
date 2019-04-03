import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CityRevsContainer extends Component {

	handleOnClickBackButton = () => {
		this.props.history.goBack();
	};

	renderRevs() {
		if(this.props.cityRevs.length > 0) {
			return this.props.cityRevs.map(cityRev => {
				return (
					<tr className='d-flex' key={ cityRev._rev }>
						<td className='col-3'>{ cityRev._rev }</td>
						<td className='col-9'>
							<pre>{ JSON.stringify(cityRev, null, 2) }</pre>
						</td>
					</tr>
				);
			});
		} else {
			return <tr><td colSpan='2' className='text-center'>No revs</td></tr>
		}
	}

	render() {
		return (
			<div className='col-12 CityContainer'>
				<div className='card'>
					<div className='card-body'>
						<div className='d-flex mb-4'>
							<button 
									onClick={ this.handleOnClickBackButton }
									className='col-2 col-lg-1 btn btn-primary'>
								<i className='fas fa-chevron-left mr-2'></i>
								Back
							</button>
							<h4 className='col-8 col-lg-10 card-title text-center mb-0'>Change History for { this.props.id }</h4>
						</div>
						<div className='table-responsive'>
							<table className='table'>
								<thead className='thead-light'>
									<tr className='d-flex'>
										<th className='col-3'>Revision</th>
										<th className='col-9'>Document</th>
									</tr>
								</thead>
								<tbody>
									{ this.renderRevs() }
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cityRevs: state.cityRevs
	};
};

export default withRouter(connect(mapStateToProps, null)(CityRevsContainer));