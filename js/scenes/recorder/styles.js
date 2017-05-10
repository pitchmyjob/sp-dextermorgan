var React = require('react-native');
var { Dimensions } = React;
var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    height:null
  },
  preview: {
    flex: 1,
    alignItems: 'center',
  },
  recorder:{
  	backgroundColor: 'rgba(0,0,0,0)',
  },
  blocrecord:{
  	alignItems:'center',
  	position: 'absolute',
  	bottom:20
  },
  startrecord:{
  	 position: 'absolute',
  	 bottom:20
  },
  startrecordsize:{
  	width:60, 
  	height:60,
  },
  btnsend:{
  	position: 'absolute',
  	bottom:20,
  	right:20,
  	width:50,
  	height:50,
  	alignItems: 'center',
  	justifyContent: 'center',
  	backgroundColor:"white",
  	borderRadius:25,
  	paddingLeft:5,
  	paddingTop:2
  },
  question:{
  	width:width,
  	paddingTop:25,
  	paddingLeft:10,
  	alignItems: 'flex-start',
  	borderBottomWidth:0,
    paddingRight:20
  },
  icon:{
  	color:'white',
  	fontSize:25
  },
  color:{
  	color:'white',
  	fontSize:20
  }
}; 