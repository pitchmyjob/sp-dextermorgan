import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text, Item, Icon } from 'native-base';


class Like extends Component {

  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this)
    this.state = {
      is_liked:this.props.is_liked,
      likes:this.props.likes
    };
  }

  handleLike(){
    this.props.likeSpitch(this.props.id)
    if(this.state.is_liked)
      this.setState({likes: this.state.likes - 1})
    else
      this.setState({likes: this.state.likes + 1})
    this.setState({is_liked: !this.state.is_liked})
  }

  render() {

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Item style={{alignItems: 'center', borderColor:'transparent'}}>
              <TouchableOpacity onPress={() => this.handleLike()}>
                 <Icon name="ios-heart-outline" style={{color:(this.state.is_liked ? '#e62117' : (this.props.color ? this.props.color : "#0064D4")), fontSize:28}} />
              </TouchableOpacity>
            	<Text style={{color:(this.props.color ? this.props.color : "#000")}}>{this.state.likes}</Text>
            </Item>
        </View>
    )
  }
}



export default Like
