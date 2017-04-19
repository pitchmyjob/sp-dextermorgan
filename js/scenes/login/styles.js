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
  	alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:85
  },
  btnfb:{
    width:width * .85,
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
    width:width * .85,
    backgroundColor:'#1DA1F2'
  },
  texttwt:{
  	flex: 1,
    textAlign: 'center',
    color: 'white',
  },
  ou:{
  	position: 'absolute',
  	top:0,
  },
  footer:{
  	position: 'absolute',
  	bottom:0,
  	paddingBottom:30
  },
  forgetpwd:{
  	fontSize:15,

  },
  form:{
  	width:width * .85,
  }

}; 