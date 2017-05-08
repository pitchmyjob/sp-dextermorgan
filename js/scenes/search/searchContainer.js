import { connect } from 'react-redux';
import Search from './searchComponent' ;
import { listTopSpitcher, listTopTag } from '../../actions/search'


function mapStateToProps(state, ownProps) {
  return { 
  	user: state.user,
  	spitchers: state.search.spitchers,
  	tags: state.search.tags,
  };
}

function mapDispatchToProps(dispatch){
  return {
  	listTopSpitcher: () => {
      return dispatch(listTopSpitcher())
    },
    listTopTag: () => {
      return dispatch(listTopTag())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
