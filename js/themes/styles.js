var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;


export default {
	inputGroup:{
		borderColor:'#9B9B9B',
		marginTop:10,
		marginBottom:10
	},
	inputGroupError:{
		borderColor:'red',
		marginTop:10,
		marginBottom:10,
	},
	buttonGradient:{
		padding:0,
		width:width,
		alignItems: 'center',
	},
	imageButtonGradient:{
		resizeMode: 'contain',
		width:width * .85,
		alignItems: 'center',
		justifyContent: 'center', 
	},
	textButtonGradient:{
		backgroundColor: 'rgba(0,0,0,0)',
		color:'white',
		fontSize:18
	},
	buttonFacebook:{
    	width:width * .85,
    	height:50,
    	backgroundColor:'#3C5A99'
    },
    textFacebook:{
  		flex: 1,
    	textAlign: 'center',
    	color: 'white',
    },
}