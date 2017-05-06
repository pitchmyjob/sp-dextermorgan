import { connect } from 'react-redux';

import User from './userComponent' ;




function mapStateToProps(state, ownProps) {
  return { 
    user: state.user
  };
}

export default connect(mapStateToProps, null)(User);
