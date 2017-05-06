import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form'
import { Alert } from 'react-native'

import { addPhotoUser } from '../../../../actions/users'

import StepFive from './stepFiveComponent'


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  	addPhotoUser: (photo) => {
      return dispatch(addPhotoUser({photo}))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StepFive);
