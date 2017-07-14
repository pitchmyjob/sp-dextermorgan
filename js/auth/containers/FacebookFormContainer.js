import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form'
import { Actions, ActionConst } from 'react-native-router-flux'
import { Alert } from 'react-native'

import { appAuthToken } from '../../utils/storage' 
import FacebookForm from '../components/FacebookForm'
import { userNotExists, authRegisterFacebook } from '../AuthActions'
import { userAuthenticated } from '../../user/UserActions'


function mapStateToProps(state, ownProps) {
  return { 
    auth:state.auth
  };
}

const config = {
  form: 'FacebookForm', 
  onSubmit: (values, dispatch, props) => {
      return dispatch(userNotExists({username:values['username']}))
      .then((response) => {

          return dispatch(authRegisterFacebook(values))
          .then((response) => {

              dispatch(userAuthenticated(response.action.payload.data.user))
              Actions.contact({type: ActionConst.REPLACE, rightTitle:"Passer", onRight:() => Actions.tabbar() })
              appAuthToken.storeSessionToken(response.action.payload.data.token) 

            }).catch((error) => {
                Alert.alert('Erreur', "Veuillez ressayer")
            })

      }).catch((error) => {
          throw new SubmissionError({ username: "Ce nom d'utilisateur est déjà utilisé" })
      })  
  }
}



export default connect(mapStateToProps, null)(reduxForm(config)(FacebookForm));