var React = require('react-native');
var { Dimensions } = React; 
var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    width: null,
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
  thumbImage:{
    width:width, 
    height:300, 
    alignItems: 'center',justifyContent: 'center',
    paddingLeft:15,
    paddingRight:15
  },
  txtImage:{
    backgroundColor:'transparent',
    color:'white',
    fontSize:30,
    textAlign:'center'
  },
  txtImageOld:{
    position:'absolute',
    color:'white',
    fontSize:20,
    bottom:0,
    width:width,
    padding:15,
    backgroundColor:'rgba(52, 52, 52, 0.5)',
  },
  askFirstVideo:{
    width:width-50,
    height:width-125,
    alignItems: 'center',justifyContent: 'center',
    paddingLeft:15,
    paddingRight:15,
    marginRight:15,
    marginTop:10,
    marginBottom:10,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    elevation: 2,
    marginLeft:25,
    borderWidth : 0.5,
    borderColor:'#ccc'
  },
  askVideo:{
    width:width-50,
    height:width-125,
    marginRight:15,
    marginTop:10,
    marginBottom:10
  },
  askVideoThumb:{
    width:width-50,
    height:width-125,
  },
  askVideoUser:{
    width:width-50,
    position:'absolute',
    bottom:10,
    flex:1,
    flexDirection: 'row',
    paddingLeft:15,
    paddingRight:15
  },
  askFirstVideoText:{
    textAlign:'center',
    fontSize:26,
    color:'#0064D4'
  },
  askFirstVideoTextTotal:{
    position:'absolute',
    bottom:20,
    color:'#BABCBE',
    fontSize:14
  }
}; 