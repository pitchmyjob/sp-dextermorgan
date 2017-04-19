import { connect } from 'react-redux';

import Feed from './feedComponent' ;


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch){
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Feed);
