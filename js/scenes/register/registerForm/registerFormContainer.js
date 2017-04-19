import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux';
import { signUp } from '../../../actions/auth'
import { asyncValidateUserNotExists } from '../../../utils/forms/validators'
import RegisterForm from './registerFormComponent'

function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    auth:state.auth
  };
}

const config = {
  form: 'RegisterForm',
  onSubmit: (values, dispatch, props) => {
      dispatch(signUp(values))
  },
  asyncValidate: asyncValidateUserNotExists,
  asyncBlurFields: ['username', 'email']
}


export default connect(mapStateToProps, null)(reduxForm(config)(RegisterForm));
