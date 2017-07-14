import { connect } from 'react-redux';
import { reduxForm, SubmissionError, reset } from 'redux-form'
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { createAsk } from '../AskActions'
import CreateAsk from '../components/CreateAsk' ;



function mapStateToProps(state, ownProps) {
  return { 
    user: state.user.profile.data,
    ask: state.ask.create
  };
}

const config = {
  form: 'AskForm',
  onSubmit: (values, dispatch, props) => {
      return dispatch(createAsk(values))
	      .then((response) => {

	          Alert.alert(
				  'Bravo',
				  'Question envoyé !',
				  [
				    {text: 'OK', onPress: () => Actions.pop()},
				  ],
				  { cancelable: false }
				)

	      }).catch((error) => {
	          Alert.alert('Erreur', "Veuillez recommencer")
	      })
  },
  onSubmitFail : (error, dispatch,submitError) => {
  	console.log(error)
  	console.log(submitError)

  	Alert.alert('Désolé', "Votre question semble un peu courte")

  }
}


export default connect(mapStateToProps, null)(reduxForm(config)(CreateAsk));
