var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  content:{
  	backgroundColor:"#f3f6f9",
  },
  header:{
  	paddingLeft:25, 
  	paddingRight:30, 
  	paddingBottom:5, 
  	paddingTop:10, 
  	backgroundColor:"white"
  },
  datas:{
  	height:65, 
  	flexDirection: 'row', 
  	paddingTop:15, 
  	backgroundColor:"white"
  },
  btn:{
  	paddingLeft:20, 
  	paddingRight:20, 
  	paddingTop:20, 
  	paddingBottom:20, 
  	backgroundColor:"white"
  },
  btnSize:{
    height:37
  },
  btnWeight:{
    fontWeight: '500'
  },
  card:{
    paddingLeft:0,
    paddingRight:0,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    shadowOpacity: 0,
    elevation: 0,
    paddingBottom:5,
  },
}; 