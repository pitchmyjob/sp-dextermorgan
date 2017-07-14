import React, { Component, Dimensions, } from 'react';
import { Image, TouchableWithoutFeedback, ListView, TextInput, StatusBar, TouchableHighlight, Platform} from 'react-native';
import { Text, View, Icon, Item, Thumbnail, Spinner, Right} from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import Video from 'react-native-video';

import { FullLoader } from '../../themes/base'
import styles from '../styles/video'
import Like from '../../spitch/containers/LikeContainer'


class VideoSpitch extends Component {

  constructor(props) { 
    super(props);
    this.onLoad = this.onLoad.bind(this)
    this.player=null
    this.state={
      paused:false,
      loader:true
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
            
            
            {this.state.loader && 
              <FullLoader />
            }
     </View>
    );
  }
}

export default VideoSpitch
