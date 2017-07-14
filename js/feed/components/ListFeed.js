import React, { Component, Dimensions, } from 'react';
import { Image, View, TouchableOpacity, Animated, Share, FlatList, RefreshControl, StatusBar } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, Item, Input, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { ButtonTransparent, CenterLoader} from '../../themes/base'
import styles from '../styles/feed'
import SpitchFeed from './SpitchFeed'



class ListFeed extends Component {

  constructor(props) {
    super(props);
    this.onEndReached = this.onEndReached.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }

  componentDidMount() {
      this.props.listFeed()
  }

  renderItem({item}){
    if(item.feed_type == 1){
      return (<SpitchFeed item={item}/> )
    }
    return (<View></View>)
  }

  onEndReached(){
    if(this.props.feed.pagination.next_cursor)
        this.props.nextFeed(this.props.feed.pagination.next_cursor)
  }

  onRefresh(){
     this.props.refreshFeed()
  }
  
  render() {
    const { user, feed } = this.props
    return (
      <Container style={styles.container}>

          <Item style={styles.ask} onPress={ () => Actions.ask() }>
              <Image source={{uri:user.photo}} style={styles.imguser} />
              <Text style={{color:'#9B9B9B'}}>
                  Posez votre question
              </Text>
          </Item>


          {feed.fulfilled &&
            <FlatList
                data={feed.list}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem}
                onEndReached={this.onEndReached}
                onRefresh={this.onRefresh}
                refreshing={feed.refreshPending}
              />
          }

          {feed.pending &&
            <CenterLoader />
          }

        
          
      </Container>
    );
  }
}

export default ListFeed
