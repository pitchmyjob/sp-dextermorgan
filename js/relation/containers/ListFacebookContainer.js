import { connect } from 'react-redux';

import ListFacebook from '../components/ListFacebook';
import { listFacebookFriend, followUser, activeFacebookFriend, followAllUser} from '../RelationActions'


function mapStateToProps(state, ownProps) {
  return { 
  	user : state.user.profile.data,
  	facebook : state.relation.facebook
  };
}

function mapDispatchToProps(dispatch){
  return {
    listFacebookFriend:() => {
    	return dispatch(listFacebookFriend())
    },
    followUser: (id) => {
    	dispatch(activeFacebookFriend(id))
    	return dispatch(followUser(id))
    },
    followAll: () => {
      return dispatch(followAllUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFacebook);
