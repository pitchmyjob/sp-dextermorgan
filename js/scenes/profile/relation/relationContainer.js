import { connect } from 'react-redux';

import Relation from './relationComponent';

import { listFollow, followUser, listFollower } from '../../../actions/relations';


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    relation: state.relation.list_follow_follower
  };
}

function mapDispatchToProps(dispatch){
  return {
    listFollow: (id) => {
      return dispatch(listFollow(id))
    },
    listFollower: (id) => {
      return dispatch(listFollower(id))
    },
    listFollowSearch: (id, search) => {
      return dispatch(listFollow(id, search))
    },
    listFollowerSearch: (id, search) => {
      return dispatch(listFollower(id, search))
    },
    followFriend: (id) => {
    	dispatch({type:'FOLLOW_LIST_FOLLOW_FOLLOWER', meta:{id:id} })
    	return dispatch(followUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Relation);