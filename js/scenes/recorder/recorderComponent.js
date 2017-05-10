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
      marker:[],
      lastVideo:null
    };
  }

  componentDidMount(){
      this.props.initNewSpitch(this.props.id)
      this.progressBar()
  } 

  progressBar(){ 
    setInterval(function(){
          if(this.state.record){
            this.refs.circularProgress.performLinearAnimation(this.state.timer, 600);
            this.setState({timer:this.state.timer+1})
          }
      }.bind(this), 600);
  }


  onPressIn(){
      if(this.state.lastVideo)
        this.props.uploadClip(this.state.lastVideo, this.props.spitch.id)

      if (this.camera) {
        this.camera.capture({mode: Camera.constants.CaptureMode.video}).then((data) => {
           this.setState({lastVideo:data.path})
        }).catch(err => console.error(err));
        this.setState({isRecording: true});
      }

      this.setState({record:true, next:true})
  }

  onPressOut(){
      if (this.camera) {
        this.camera.stopCapture();
      }
      this.setState({isRecording: false, record:false, marker: this.state.marker.concat([this.state.timer*3.6-5]) })
  }


  nextStep(){
      this.props.uploadClip(this.state.lastVideo, this.props.spitch.id)
  } 

  renderButtonPlay(){

      const marker = this.state.marker.map((marker) => {
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
      return(
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

                {marker}
                
                <TouchableOpacity 
                    style={styles.startrecord} 
                    onPressIn = {this.onPressIn.bind(this)}
                    onPressOut = {this.onPressOut.bind(this)} 
                    >
                    <Image source={require('../../../images/recorder.png')} style={styles.startrecordsize}/>
                </TouchableOpacity>

          </View>

      )
   }


  render() {
    const { spitch } = this.props

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
                captureTarget={Camera.constants.CaptureTarget.temp}
                type={Camera.constants.Type.back} 
                captureQuality="medium"
                captureAudio={true}
                > 

                    <Item style={styles.question}>
                        <Icon name="ios-arrow-back-outline" style={styles.icon} onPress={() => Actions.pop()}/>
                        <Text style={styles.color}>
                            Que puis je faire pour vous monsieur gros enculé ?
                        </Text>
                    </Item>
              
                   { spitch.fulfilled && 
                     this.renderButtonPlay()
                   }

                   {this.state.next && 
                      !this.state.isRecording &&
                        <View style={styles.btnsend}>
                            <TouchableOpacity onPress={this.nextStep.bind(this)}>
                                <Icon name="md-send" style={{color:'#4462e0'}}/>
                            </TouchableOpacity>
                        </View>
                    ||
                     <View style={styles.nobtnsend}> 
                        <Text style={styles.txt}></Text>
                     </View>
                    }
  
                </Camera>
          </View>
          
    );
  }
}

export default Recorder
