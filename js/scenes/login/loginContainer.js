import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'

import Login from './loginComponent'
import { login } from '../../actions/auth'


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    auth:state.auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {}
}


const config = {
  form: 'LoginForm',
  onSubmit: (values, dispatch, props) => {
      dispatch(login(values))
  },
}


export default connect(null, null)(reduxForm(config)(Login));