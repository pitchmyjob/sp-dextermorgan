import { connect } from 'react-redux';
import Settings from './settingsComponent';

import { logout } from '../../actions/auth'


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    follow:state.relation.follow
  };
}

function mapDispatchToProps(dispatch){
  return {
  	logout: () => {
  		dispatch(logout())
  	}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
