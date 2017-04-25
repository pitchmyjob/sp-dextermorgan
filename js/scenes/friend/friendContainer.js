import { connect } from 'react-redux';

import { generateFacebookList } from '../../actions/relations'
import Friend from './friendComponent';


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    relation: state.relation.facebook
  };
}

function mapDispatchToProps(dispatch){
  return {
    generateFacebookList: (value) => {
      return dispatch(generateFacebookList(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend);
