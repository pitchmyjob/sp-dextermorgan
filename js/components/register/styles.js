var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
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
    marginTop:30,
    height:50,
    width:width * .85,
    backgroundColor:'#1DA1F2'
  },
  texttwt:{
  	flex: 1,
    textAlign: 'center',
    color: 'white',
  },
  txt:{
  	color:'#BABCBE',
  	marginTop:50,
  	fontSize:18,
  	textAlign:'center'
  },
  email:{
  	color:'#0064D4',  	
  	fontSize:18,
  	textAlign:'center'
  }
}