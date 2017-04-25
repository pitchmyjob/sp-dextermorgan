import { connect } from 'react-redux';

import ListFriend from './listFriendComponent';

import { listFacebookFriend, followUser, followAll } from '../../../actions/relations';


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    relation: state.relation.facebook
  };
}

function mapDispatchToProps(dispatch){
  return {
    listFacebookFriend: () => {
      return dispatch(listFacebookFriend())
    },
    followFriend: (id) => {
    	dispatch({type:'FOLLOW_FACEBOOK_FRIEND', meta:{id:id} })
    	return dispatch(followUser(id))
    },
    followAll: () => {
      return dispatch(followAll())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFriend);
