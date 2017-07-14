import { connect } from 'react-redux';

import ListRelation from '../components/ListRelation';

import { listFollow, followUser, listFollower } from '../RelationActions';


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user.profile.data,
    relation: state.relation.relation
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
    	// dispatch({type:'FOLLOW_LIST_FOLLOW_FOLLOWER', meta:{id:id} })
    	// return dispatch(followUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListRelation);