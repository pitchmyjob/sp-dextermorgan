import { connect } from 'react-redux';

import Feed from './feedComponent' ;

import { logout } from '../../actions/auth'


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch){
  return {
  	logout: () => {
  		dispatch(logout())
  	}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Feed);
