import { connect } from 'react-redux';
import Notification from './notificationComponent';

import { listNotification } from '../../actions/notification'

function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    notification: state.notification
  };
}

function mapDispatchToProps(dispatch){
  return {
  	listNotification: () => {
  		return dispatch(listNotification())
  	}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
