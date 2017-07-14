import { connect } from 'react-redux';
import Like from '../components/Like';
import { likeSpitch } from '../SpitchActions'

function mapStateToProps(state, ownProps) {
  return {
  	like: state.spitch.like 
  };
}

function mapDispatchToProps(dispatch){
  return {
    likeSpitch: (id) => {
      return dispatch(likeSpitch(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Like);
