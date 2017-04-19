import { connect } from 'react-redux';

import Friend from './friendComponent';


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user
  };
}

export default connect(mapStateToProps, null)(Friend);
