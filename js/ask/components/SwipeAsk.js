import React, { Component, Dimensions } from 'react';
import { Image, TouchableOpacity, ListView, TextInput } from 'react-native';
import { Container, Content, Text, Item, Icon, Input, Right, View, Thumbnail, Spinner, Card, CardItem, Left, Body, Button } from 'native-base';
import { Actions, ActionConst} from 'react-native-router-flux';

import styles from '../styles/swipe'

import { parseDate } from '../../utils/date'
import { FullLoader, ButtonSpitch } from '../../themes/base'

import Camera from 'react-native-camera';
import Swiper from 'react-native-swiper';


const Slide = props => {
  const { items, index } = props
  var item = items[index]
  return (
    
    <View style={styles.slide}>
      <Image style={styles.slideimg} source={require('../../../assets/images/bg/1.png')} />

      {item.id && 

          <View style={styles.slidebloc}>

            <Text style={styles.slidetxt} >
              {item.text}
            </Text>

            <Item style={styles.slideitem} onPress={() => Actions.visit({id:item.user.id}) }>
              <Thumbnail source={{uri:item.user.photo+".115x115"}} small circular/>
              <Text style={styles.slideuser}>Par </Text>
              <Text style={styles.slideuser2}>{item.user.username}</Text>
            </Item>

          </View>
      }

          {item.loader &&
            <View style={styles.sdfs}>
              <Spinner />
            </View>
          }

          <View style={styles.slidebtn}>
              <ButtonSpitch onPress={() => Actions.recorder({type:ActionConst.REPLACE, id:item.id, text:item.text}) }/>
          </View>

    </View>
  )
}




class SwipeAsk extends Component {


  constructor (props) {
    super(props)
    this._swiper = null
    this.onScrollBeginDrag = this.onScrollBeginDrag.bind(this)
    this.slide = [0,1,1]
    this.state = {
      display:null,
      lastIndex:0, 
      index:0
    }
  }

  componentDidMount() {
    this.props.swipeAsk()
    setTimeout(() => {
        this.setState({display:true}) 
      }, 650)
  }

  onScrollBeginDrag(e, state, context){
      const { lastIndex, index } = this.state
      const { swipe } = this.props
      let newIndex = index
      let move = null
      let cursor = swipe.pagination.next_cursor

      if (lastIndex === 2 && state.index === 0) {
        newIndex += 1
        move = "forward" // forward
      } else if (lastIndex === 0 && state.index === 2) {
        newIndex -= 1 // backward
        move = "backward"
      } else if (lastIndex > state.index) {
        newIndex -= 1 // backward
        move = "backward"
      } else if (lastIndex < state.index) {
        newIndex += 1 // forward
        move = "forward"
      }
   

      this.setState({ lastIndex: state.index, index: newIndex })

      let max = swipe.items.length-1
      let next = swipe.items.length-5

      if(newIndex == 0){
          this.slide[2] = 1
          this.slide[0] = 0
          this.slide[1] = 1
      }

      if(state.index == 0 && newIndex > 0 && newIndex < max ){
          this.slide[2] = newIndex > 0 ? newIndex - 1 : 0
          this.slide[0] = newIndex
          this.slide[1] = newIndex + 1
      }
      if(state.index == 1 && newIndex > 0 && newIndex < max){
          this.slide[0] = newIndex > 0 ? newIndex - 1 : 0
          this.slide[1] = newIndex
          this.slide[2] = newIndex + 1
      }
      if(state.index == 2 && newIndex > 0 && newIndex < max){
          this.slide[1] = newIndex > 0 ? newIndex - 1 : 0
          this.slide[2] = newIndex
          this.slide[0] = newIndex + 1
      }

      if(state.index == 0 && newIndex < 0 && (newIndex*-1) < max){
          this.slide[1] = (newIndex*-1) > 0 ? (newIndex*-1) - 1 : 0
          this.slide[0] = (newIndex*-1)
          this.slide[2] = (newIndex*-1) + 1
      }
      if(state.index == 1 && newIndex < 0 && (newIndex*-1) < max){
          this.slide[2] = (newIndex*-1) > 0 ? (newIndex*-1) - 1 : 0
          this.slide[1] = (newIndex*-1)
          this.slide[0] = (newIndex*-1) + 1
      }
      if(state.index == 2 && newIndex < 0 && (newIndex*-1) < max){
          this.slide[0] = (newIndex*-1) > 0 ? (newIndex*-1) - 1 : 0
          this.slide[2] = (newIndex*-1)
          this.slide[1] = (newIndex*-1) + 1
      }


      if(newIndex == next && cursor){
          this.props.nextSwipeAsk(cursor)
      }
      
  }

  render() {
    const {swipe} = this.props

 

    return (
      <View style={styles.container}>
          
          
          {this.state.display && swipe.items.length > 0 &&
            <Camera
              ref={(cam) => {
                this.camera = cam; 
              }} 
              style={styles.preview}
              orientation={Camera.constants.Orientation.portrait}
              aspect={Camera.constants.Aspect.fill}
              captureTarget={Camera.constants.CaptureTarget.temp}
              type={Camera.constants.Type.front} 
              captureQuality="480p"
              captureAudio={false}
              playSoundOnCapture={false}
          > 



              <Swiper 
                ref={(swiper) => {this._swiper = swiper}} style={styles.wrapper} 
                showsButtons={false} 
                showsPagination={false}
                loop={true}
                onMomentumScrollEnd={this.onScrollBeginDrag}
                >

                 <Slide items={swipe.items} index={this.slide[0]} />
                 <Slide items={swipe.items} index={this.slide[1]}/>
                 <Slide items={swipe.items} index={this.slide[2]}/>

              </Swiper>
            

          </Camera>
          ||
          
          <Image style={styles.slideimg} source={require('../../../assets/images/bg/1.png')} />
        }
      </View>
    );
  }
}

export default SwipeAsk
