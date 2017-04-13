var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1
  },
  topcontainer:{
    flex:0.5,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  botcontainer:{
    flex:1,
  },
  footer:{
  	position: 'absolute',
  	bottom:0,
  	paddingBottom:30
  },
  form:{
  	width:width * .85,
  }
}