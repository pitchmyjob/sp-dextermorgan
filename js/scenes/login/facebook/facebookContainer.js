import { connect } from 'react-redux';
import { Actions, ActionConst} from 'react-native-router-flux'

import { verifAuthFacebook } from '../../../actions/auth'

import Facebook from './facebookComponent'


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    auth:state.auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    authFacebook: (values) => {
      dispatch(verifAuthFacebook(values))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Facebook);