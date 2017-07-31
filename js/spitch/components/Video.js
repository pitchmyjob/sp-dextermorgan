import React, { Component, } from 'react';
import { Image, TouchableWithoutFeedback, ListView, TextInput, StatusBar, TouchableHighlight, Platformn, Dimensions} from 'react-native';
import { Text, View, Icon, Item, Thumbnail, Spinner, Right} from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import Video from 'react-native-video';

import { FullLoader } from '../../themes/base'
import styles from '../styles/video'
import Like from '../../spitch/containers/LikeContainer'
import * as Progress from 'react-native-progress';


class VideoSpitch extends Component {

  constructor(props) { 
    super(props);
    this.onLoad = this.onLoad.bind(this)
    this.onProgress = this.onProgress.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.player=null
    this.state={
      paused:false,
      loader:true,
      progress:0.001
    }
  }

  componentWillMount() {
    this.props.retrieveSpitch(this.props.item.id)
  }

  onLoad() {
    this.setState({loader:false});
  };

  onPressIn(){
    this.setState({paused:true})
  }

  onPressOut(){
    this.setState({paused:false})
  }

  onProgress(data) {
    if(data.playableDuration >= data.currentTime){
      var calcul = data.currentTime/data.playableDuration
      this.setState({progress:calcul ? calcul : 0.001})
    }
  }

  onEnd(){
    this.setState({progress:1})
  }


  render() {
    const { video, item } = this.props

    return (
     <View style={styles.container}>
          <StatusBar 
              animated
              hidden 
            /> 

              <TouchableWithoutFeedback onPressIn = {this.onPressIn.bind(this)} onPressOut = {this.onPressOut.bind(this)} >
                <View style={{flex:1}}>
                <Video
                  ref={(ref: Video) => { this.player = ref }}
                  source={{uri:(item.spitch_transcoded === null ? item.spitch : item.spitch_transcoded)}}
                  style={styles.fullScreen}
                  playInBackground={false}                // Audio continues to play when app entering background.
                  playWhenInactive={false}
                  ignoreSilentSwitch={"ignore"} 
                  resizeMode="cover"
                  repeat={false}
                  muted={false} 
                  paused={this.state.paused}
                  onLoad={this.onLoad}
                  onProgress={this.onProgress}
                  onEnd={this.onEnd}
                /> 
                

                   <Item style={styles.question}  >
                      <Icon name="ios-arrow-back-outline" style={styles.icon} onPress={() => Actions.pop()} />
                      <Text style={styles.color}>
                          {item.ask.text}
                      </Text>
                    </Item>


                    <Item style={styles.blocuser} onPress={() => Actions.visit({id:item.user.id})} >
                        <Thumbnail source={{uri:item.user.photo+".30x30"}} small circular/>
                        <Text style={styles.user}>Par </Text>
                        <Text style={styles.user2}>{item.user.username}</Text>
                        {video.fulfilled && 
                          <Right style={styles.user3}>
                            <Like id={video.data.id} likes={video.data.likes} is_liked={video.data.is_liked} color='white' />
                          </Right>
                        }
                    </Item>
                 </View> 
              </TouchableWithoutFeedback>

              <Progress.Bar 
                  progress={this.state.progress} 
                  borderWidth={0}
                  color="#5c62e9"
                  unfilledColor="rgba(27, 31, 35, 0.60)" 
                  borderRadius={0} 
                  width={Dimensions.get('window').width} 
                  style={{position:'absolute',bottom:0}}/>
              

            
            {this.state.loader && 
              <FullLoader />
            }
     </View>
    );
  }
}

export default VideoSpitch
