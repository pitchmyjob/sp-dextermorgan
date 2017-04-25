import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form'
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { authSignupUser, authEmailSignUp } from '../../../../actions/auth'

import StepFour from './stepFourComponent'


const config = {
  form: 'RegisterForm',
  destroyOnUnmount: false,  
  forceUnregisterOnUnmount: true,
  onSubmit: (values, dispatch, props) => {

  	 return dispatch(authSignupUser(values))
  	 .then((response) => {

  	 	   dispatch(authEmailSignUp(response.action.payload.data.token))
         Actions.registerPhoto()
         
      }).catch((error) => {

          Alert.alert('Error', 'Veuillez recommencer')
          
      })
  }
}


export default reduxForm(config)(StepFour);
