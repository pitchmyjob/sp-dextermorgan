import { connect } from 'react-redux';
import Spitch from './spitchComponent';

import { listAsk } from '../../actions/ask'


function mapStateToProps(state, ownProps) {
  return { 
  	ask: state.ask.asks
  };
}

function mapDispatchToProps(dispatch){
  return {
  	listAsk: () => {
      return dispatch(listAsk())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Spitch);
