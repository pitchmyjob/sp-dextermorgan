import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form'
import { Alert } from 'react-native'

import { signUp, authSignupUser, authenticateUser } from '../../../../actions/auth'

import StepFive from './stepFiveComponent'



export default connect(null, null)(StepFive);
