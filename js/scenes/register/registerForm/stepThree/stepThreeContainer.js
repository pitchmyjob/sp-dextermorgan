import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form'

import StepThree from './stepThreeComponent'

import { UserNotExists } from '../../../../actions/auth'


const config = {
  form: 'RegisterForm',
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,
  onSubmit: (values, dispatch, props) => {
  	console.log(values)
  	return dispatch(UserNotExists({username:values['username']}))
      .then((response) => {
          props.nextStep()
      }).catch((error) => {
          throw new SubmissionError({ username: "Ce nom d'utilisateur est déjà utilisé" })
      })  

  	
  }
}


export default reduxForm(config)(StepThree);
