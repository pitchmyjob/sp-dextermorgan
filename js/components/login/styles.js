var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1
  },
  content:{
  	flex: 1,
    
  },
  topcontainer:{
  	flex:0.8,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  botcontainer:{
  	flex:1,
  },
  btnfb:{
    width:width * .8,
    height:50,
    backgroundColor:'#3C5A99'
  },
  textfb:{
  	flex: 1,
    textAlign: 'center',
    color: 'white',
  },
  btntwt:{
    marginTop:20,
    height:50,
    width:width * .8,
    backgroundColor:'#1DA1F2'
  },
  texttwt:{
  	flex: 1,
    textAlign: 'center',
    color: 'white',
  },
  ou:{
  	position: 'absolute',
  	bottom:0,
  }
}; 