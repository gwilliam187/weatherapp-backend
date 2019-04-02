import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CityTableRow extends Component {
	state = {
		isEditing: false,
		idVal: this.props.id,
		cityNameVal: this.props.cityName
	};

	componentWillMount(){
		
	}

	handleSwitchToEditButton = () => {
		this.setState({ isEditing: true });
	};

	handleDeleteButton = () => {

	};

	handleUpdateButton = () => {

	};

	handleSwitchToViewButton = () => {
		this.setState({ isEditing: false });
	};

	handleOnChangeId = e => {
		this.setState({ idVal: e.target.value });
	};

	handleOnChangeCityName = e => {
		this.setState({ cityNameVal: e.target.value });
	};

	renderViewRow() {
		return (
			<tr className='d-flex flex-wrap'>
				<td className='col-3 d-flex align-items-center'>{ this.props.id }</td>
				<td className='col-5 d-flex align-items-center'>{ this.props.cityName }</td>
				<td className='col-4 d-flex justify-content-end'>
					<button 
							onClick={ this.handleSwitchToEditButton }
							className='btn btn-primary mr-1 fh-35 fw-40'>
						<i className='fas fa-pen text-white'></i>
					</button>
					<button 
							onClick={ this.handleDeleteButton }
							className='btn btn-danger fh-35 fw-40'>
						<i className='fas fa-trash-alt text-white'></i>
					</button>
				</td>
				<td className='col-12 d-flex justify-content-end border-top-0 pt-0'>
					<Link 
							to={`/cityRevs/${ this.props.id }`}
							className='ml-3 d-flex align-items-center'>
						<i className='fas fa-history mr-1'></i>
						View Revisions
					</Link>
				</td>
			</tr>
		);
		// console.log(this.props.userCities)
		// if	(this.props.userCities.total_rows>0){
		// 	let el = [];
		// 	this.props.userCities.rows.map((city)=>{
		// 		el.push (
		// 			<tr key={city.key} className='d-flex'>
		// 			<td className='col-3 d-flex align-items-center'>{city.id}</td>
		// 			<td className='col-7 d-flex align-items-center'>{city.value}</td>
		// 			<td className='col-2 d-flex justify-content-end'>
		// 				<button 
		// 						onClick={ this.handleSwitchToEditButton }
		// 						className='btn btn-primary mr-1 fh-35 fw-40'>
		// 					<i className='fas fa-pen text-white'></i>
		// 				</button>
		// 				<button 
		// 						onClick={ this.handleDeleteButton }
		// 						className='btn btn-danger fh-35 fw-40'>
		// 					<i className='fas fa-trash-alt text-white'></i>
		// 				</button>
		// 			</td>
		// 		</tr>
		// 		)
		// 	})
		// 	return el;
		// }else{
		// 	return(
		// 		<tr><td colSpan='4' style={{textAlign: "center"}}>No City Loaded Yet</td></tr>
		// 	)
		// }
	}

	renderEditRow() {
		return (
			<tr className='d-flex flex-wrap'>
				<td className='col-3 d-flex pl-0 py-2'>
					<input 
							value={ this.state.idVal } 
							onChange={ this.handleOnChangeId } 
							className='form-control' />
				</td>
				<td className='col-5 d-flex pl-0 py-2'>
					<input 
						value={ this.state.cityNameVal } 
						onChange={ this.handleOnChangeCityName } 
						className='form-control' />
				</td>
				<td className='col-4 d-flex justify-content-end'>
					<button 
							onClick={ this.handleUpdateButton }
							className='btn btn-success mr-1 fh-35 fw-40'>
						<i className='fas fa-check text-white'></i>
					</button>
					<button 
							onClick={ this.handleSwitchToViewButton }
							className='btn btn-danger fh-35 fw-40'>
						<i className='fas fa-times text-white'></i>
					</button>
				</td>
				<td className='col-12 d-flex justify-content-end border-top-0 pt-0'>
					<Link 
							to={`/cityRevs/${ this.props.id }`}
							className='ml-3 d-flex align-items-center'>
						<i className='fas fa-history mr-1'></i>
						View Revisions
					</Link>
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

const mapStateToProps = state=>{
	return{
		userCities: state.userCities,
		selectedUser: state.selectedUser
	}
}

export default connect(mapStateToProps) (CityTableRow);