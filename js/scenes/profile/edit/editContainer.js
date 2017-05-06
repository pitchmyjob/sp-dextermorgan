import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form'
import { Alert } from 'react-native'
import { Toast } from 'native-base'
import { UserNotExists } from '../../../actions/auth'
import { updateUser, addPhotoUser } from '../../../actions/users'
import { saveTokenAndUserFromToken } from '../../../actions/auth'

import EditProfile from './editComponent'


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    initialValues: {
    	title: state.user.profile.title,
    	username: state.user.profile.username,
    },
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPhotoUser: (photo) => {
      return dispatch(updateUser({photo})).then((response) => {
          Toast.show({
              type: 'success',
              text: 'Enregistré',
              position: 'bottom',
              duration:2000
            })
            dispatch(saveTokenAndUserFromToken(response.action.payload.data.token))
        }).catch((error) => {
          console.log('error')
        }) 
    }
  }
}

const config = {
  form: 'editProfileForm',
  enableReinitialize: true,
  onSubmit: (values, dispatch, props) => {

  	if(props.user.profile.username == values['username'] ){

  		return dispatch(updateUser({title:values['title']})).then((response) => {
      		Toast.show({
          	  type: 'success',
              text: 'Enregistré',
              position: 'bottom',
              duration:2000
            })
            dispatch(saveTokenAndUserFromToken(response.action.payload.data.token))
      	}).catch((error) => {
          console.log('error')
      	})  

  	}else{

  		return dispatch(UserNotExists({username:values['username']}))
	      .then((response) => {
	          	
	          	return dispatch(updateUser(values)).then((response) => {

	          		Toast.show({
		          	  type: 'success',
		              text: 'Enregistré',
		              position: 'bottom',
		              duration:2000
		            })

	          		dispatch(saveTokenAndUserFromToken(response.action.payload.data.token))
	          		
	          	}).catch((error) => {
		          console.log('error')
		      	})  

	          	

	      }).catch((error) => {
	          throw new SubmissionError({ username: "Ce nom d'utilisateur est déjà utilisé" })
	      }) 

  	} 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(EditProfile));