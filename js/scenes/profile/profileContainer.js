import { connect } from 'react-redux';

import Profile from './profileComponent' ;

import { logout } from '../../actions/auth'
import { retreiveUser } from '../../actions/users'
import { followUser } from '../../actions/relations'


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
  	},
  	retreiveUser: (id) => {
  		dispatch(retreiveUser(id))
  	},
    followUser: (id) => {
      return dispatch(followUser(id))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
