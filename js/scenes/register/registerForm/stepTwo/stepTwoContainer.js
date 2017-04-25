import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form'

import { UserNotExists } from '../../../../actions/auth'

import StepTwo from './stepTwoComponent'

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
    return dispatch(UserNotExists({email:values['email']}))
      .then((response) => {
          props.nextStep()
      }).catch((error) => {
          throw new SubmissionError({ email: 'Cette email est déjà utilisé' })
      })	
    

  }
}


export default reduxForm(config)(StepTwo);
