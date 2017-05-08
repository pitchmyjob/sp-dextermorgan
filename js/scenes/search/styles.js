var React = require('react-native');
var { Dimensions } = React; 
var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  txtspitcher:{
    fontWeight:'500',
    fontSize:15,
    paddingTop:10,
    paddingBottom:15,
    paddingLeft:5
  },
  item:{
    marginLeft:5,
    marginRight:15,
  },
  spitcher:{
    backgroundColor:'#f4f5f7',
    paddingLeft:10,
    paddingBottom:7
  },
  img:{
    borderWidth:2, 
    borderColor:'#4d62e4', 
    width:70, 
    height:70, 
    borderRadius:35
  },
  txtimg:{
    color:'#090909',
    textAlign:'center',
    fontSize:12
  },
  itemtag:{
    paddingTop:20,
    paddingLeft:20,
    paddingBottom:5
  },
  itemtagtxt:{
      fontWeight:'500',
      fontSize:18,
  }
}; 