import { connect } from 'react-redux';

import ProfileHeader from '../components/ProfileHeader';
import { followUser } from '../../relation/RelationActions'



function mapDispatchToProps(dispatch){
  return {
    followUser: (id) =>{
    	return dispatch(followUser(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProfileHeader);
