var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
    paddingBottom:250
  },
  imguser:{
    width:30,
    height:30,
    borderRadius: 15,
    marginRight:15
  },
  body:{
    flex:2,
    paddingTop:15,
    paddingLeft:10,
    paddingRight:15
  },
  footer:{
    paddingTop:25,
    flex:1.5,
    borderTopWidth:1,
    borderColor:"#ECEFF1"
  },
  footertxt:{
    textAlign:'center',
    fontSize:12,
    color:"#000000"
  },
  btn:{
    marginTop:22
  },
  empty:{
    paddingTop:10
  }
}; 