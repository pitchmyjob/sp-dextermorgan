import { connect } from 'react-redux';

import { verifyAccessToken } from '../../actions/auth';

import Home from './homeComponent' ;


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch){
  return {
    verifyAccessToken: () => {
      dispatch(verifyAccessToken())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
