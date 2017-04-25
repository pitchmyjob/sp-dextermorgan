import { connect } from 'react-redux';
import {reset} from 'redux-form'
import RegisterForm from './registerFormComponent'


const mapDispatchToProps = (dispatch) => {
  return {
    reset: (values) => {
      dispatch(reset('RegisterForm'))
    }
  }
}

export default connect(null, mapDispatchToProps)(RegisterForm);
