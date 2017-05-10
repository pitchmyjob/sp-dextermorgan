import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text, StatusBar} from 'react-native';
import { Container, Content, Icon, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { AnimatedCircularProgress } from 'react-native-circular-progress';


import Camera from 'react-native-camera';

import styles from './styles'


class Recorder extends Component {

  constructor(props) { 
    super(props);

    this.camera = null;

    this.state = {
      backgroundColor:"#918c89",
      tintColor:"#5c62e9",
      next:false,
      record:false,
      timer:2,
      fill:0,
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.disk,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: true,
      marker:[]
    };
  
  }
  componentDidMount(){
      setInterval(function(){
          if(this.state.record){
            this.refs.circularProgress.performLinearAnimation(this.state.timer, 600);
            this.setState({timer:this.state.timer+1})
          }
      }.bind(this), 600);
  }


  onPressIn(){
      this.setState({record:true, next:true})

      // if (this.camera) {
      //   this.camera.capture({mode: Camera.constants.CaptureMode.video})
      //       .then((data) => console.log(data))
      //       .catch(err => console.error(err));
      //   this.setState({
      //     isRecording: true
      //   });
      // }
  }

  onPressOut(){
      this.setState({record:false})
      this.setState({ 
          marker: this.state.marker.concat([this.state.timer*3.6-5])
      })
      // if (this.camera) {
      //   this.camera.stopCapture();
      //   this.setState({
      //     isRecording: false
      //   });
      // }
  } 

   renderListAsk(){

      return this.state.marker.map((marker) => {
          return(
                <AnimatedCircularProgress
                  key={marker}
                  rotation={marker}
                  style={{
                    position:'absolute',
                    backgroundColor: 'rgba(0,0,0,0)'
                  }}
                  size={100} 
                  width={6}
                  fill={1}
                  prefill={1}
                  tintColor="white"
                  backgroundColor='rgba(0,0,0,0)'  />
          )
      });
   }

  render() {
    const {user, search} = this.props

    
    return (

          <View style={styles.container}>
              <StatusBar
                animated
                hidden
              />
                
              <Camera
                ref={(cam) => {
                  this.camera = cam;
                }} 
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}
                captureTarget={Camera.constants.CaptureTarget.cameraRoll}
                type={Camera.constants.Type.back} 
                captureQuality="medium"
                > 

 
                    <Item style={styles.question}>
                        <Icon name="ios-arrow-back-outline" style={styles.icon} onPress={() => Actions.pop()}/>
                        <Text style={styles.color}>
                            Que puis je faire pour vous monsieur gros enculé ?
                        </Text>
                    </Item>
 
                     <View style={styles.blocrecord}>

                        <AnimatedCircularProgress
                          rotation={0}
                          ref='circularProgress'
                          style={styles.recorder}
                          size={100} 
                          width={6}
                          fill={this.state.fill}
                          tintColor={this.state.tintColor}
                          backgroundColor={this.state.backgroundColor} />

                          {this.renderListAsk()}
                          
                          <TouchableOpacity 
                              style={styles.startrecord} 
                              onPressIn = {this.onPressIn.bind(this)}
                              onPressOut = {this.onPressOut.bind(this)} 
                              >
                              <Image source={require('../../../images/recorder.png')} style={styles.startrecordsize}/>
                          </TouchableOpacity>

                    </View>

                   {this.state.next && !this.state.isRecording &&
                    <View style={styles.btnsend}>
                        <TouchableOpacity onPress={() => this.stopRecording}>
                            <Icon name="md-send" style={{color:'#4462e0'}}/>
                        </TouchableOpacity>
                    </View>
                    ||
                    null
                    }
  
                   
                </Camera>
          </View>

  
           
          
    );
  }
}

export default Recorder
