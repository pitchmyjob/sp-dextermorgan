var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    height:null,
    width:null 
  },
  topcontainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  botcontainer:{
    flex:1,
  },
  footer:{
    borderWidth:0,
    borderColor:'white',
    backgroundColor:'white',
    height:null, 
    paddingBottom:20,
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0 
  },
  bodyfooter:{
    flex:1,
    alignItems: 'center', 
    justifyContent: 'center',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0
  },
  form:{
  	width:width * .85,
  }
}