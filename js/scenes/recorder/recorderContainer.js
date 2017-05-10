import { connect } from 'react-redux';
import Recorder from './recorderComponent';

import { appAuthToken } from '../../utils/storage'
import { initNewSpitch, uploadClip } from '../../actions/spitch'


function mapStateToProps(state, ownProps) {
  return {
  	spitch: state.spitch.new 
  };
}

function mapDispatchToProps(dispatch){
  return {
  	initNewSpitch: (id) =>{
  		return dispatch(initNewSpitch(id))
  	},
  	uploadClip: (path, id) =>{
  		return dispatch(uploadClip(path, id))
  	}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Recorder);
