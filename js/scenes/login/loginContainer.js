import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import { Alert } from 'react-native'

import Login from './loginComponent'
import { login } from '../../actions/auth'


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    auth:state.auth
  };
}

const config = {
  form: 'LoginForm',
  onSubmit: (values, dispatch, props) => {
      dispatch(login(values))
  },
  onSubmitFail : (error, dispatch,submitError) => {
    console.log(error)
    console.log(submitError)
  }
}


export default connect(mapStateToProps, null)(reduxForm(config)(Login));