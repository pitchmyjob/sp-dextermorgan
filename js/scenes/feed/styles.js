var React = require('react-native');
var { Dimensions } = React; 
var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    width: null,
    height: null,
  },
  card:{
    paddingLeft:0,
    paddingRight:0,
    marginTop:10,
    marginLeft:0,
    marginRight:0,
    shadowOpacity: 0,
    elevation: 0,
  },
  imguser:{
    width:30,
    height:30,
    marginLeft:15,
    marginRight:10,
    borderRadius: 15
  },
  ask:{
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor:'white', 
    height:45
  },
  txtImage:{
    position:'absolute',
    color:'white',
    fontSize:20,
    bottom:0,
    width:width,
    padding:15,
    backgroundColor:'rgba(52, 52, 52, 0.5)',
  },
}; 