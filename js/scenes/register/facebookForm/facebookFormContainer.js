import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form'
import { Actions } from 'react-native-router-flux'
import { Alert } from 'react-native'

import { signUp, verifAuthFacebook, UserNotExists } from '../../../actions/auth'

import FacebookForm from './facebookFormComponent'


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
  form: 'FacebookForm', 
  onSubmit: (values, dispatch, props) => {
      return dispatch(UserNotExists({username:values['username']}))
      .then((response) => {

          return dispatch(signUp(values, "facebook"))

      }).catch((error) => {
          throw new SubmissionError({ username: "Ce nom d'utilisateur est déjà utilisé" })
      })  
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FacebookForm));