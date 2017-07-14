import { connect } from 'react-redux';

import Video from '../components/Video';
import { retrieveSpitch } from '../SpitchActions'


function mapStateToProps(state, ownProps) {
  return {
  	video: state.spitch.video 
  };
}

function mapDispatchToProps(dispatch){
  return {
    retrieveSpitch: (id) => {
      return dispatch(retrieveSpitch(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Video);
