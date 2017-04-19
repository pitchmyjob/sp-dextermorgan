import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux'

import { asyncValidateUserNotExists } from '../../utils/forms/validators'

import { signUp, verifAuthFacebook } from '../../actions/auth'
import Register from './registerComponent'


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

const config = {
  form: 'RegisterRsForm',
  onSubmit: (values, dispatch, props) => {
      return dispatch(signUp(values, true))
    },
  asyncValidate: asyncValidateUserNotExists,
  asyncBlurFields: ['username']
}



export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(Register));
