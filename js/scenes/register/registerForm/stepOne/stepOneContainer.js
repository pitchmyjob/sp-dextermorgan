import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'

import StepOne from './stepOneComponent'

function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    auth:state.auth
  };
}

const config = {
  form: 'RegisterForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  onSubmit: (values, dispatch, props) => {
  	props.nextStep()
  }
}


export default reduxForm(config)(StepOne);
