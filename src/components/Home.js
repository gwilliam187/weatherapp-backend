import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserContainer from './UserContainer';
import CityContainer from './CityContainer';

class Home extends Component {
	determineWhetherUserHasBeenSelectedOrNot(){
		if	(this.props.selectedUser){
			return (
				<div className='container py-3 Home'>
					<div className='row'>
						<UserContainer />
						<CityContainer />
					</div>
				</div>
			);
		}else{
			return (
				<div className='container py-3 Home'>
					<div className='row'>
						<UserContainer />
					</div>
				</div>
			);
		}
	}

	render() {
		return this.determineWhetherUserHasBeenSelectedOrNot()
	}
}

const mapStateToProps = state=>{
	return{
		selectedUser : state.selectedUser
	}
}

export default connect(mapStateToProps) (Home);