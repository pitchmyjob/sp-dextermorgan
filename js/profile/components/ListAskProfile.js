import React, { Component } from 'react';
import { Button, Spinner, Card, Left, Thumbnail, Body, Right, Icon, CardItem} from 'native-base';
import { Text, Image, View, TouchableOpacity, FlatList } from 'react-native';

import styles from '../styles/styles'
import { parseDate } from '../../utils/date'

import Header from '../containers/ProfileHeaderContainer'


class ListSpitchProfile extends Component {

  constructor(props) { 
    super(props);
    this.onRefresh = this.onRefresh.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.onEndReached = this.onEndReached.bind(this)
    this.state={
      refresh:false
    }
  }

  renderItem({item}){
    var user = this.props.user.profile.data

    return (  
        <Card style={styles.card} key={item.id}>
            <CardItem >
                <Left>
                    <Thumbnail source={{uri:user.photo+".30x30"}} small circular/>
                    <Body>
                        <Text style={{fontWeight:'500', fontSize:15}}>{user.username}</Text>
                        <Text note small>{parseDate(item.created)}</Text>
                    </Body>
                </Left>
                  <Right>
                    <Icon name="ios-more" />
                 </Right>

              </CardItem>
              <CardItem >
                  <Text style={{fontWeight:'300'}}> {item.text} </Text>
            </CardItem>
        </Card>
      )
    
  }

  onEndReached(){
      this.props.nextListAsk()
  }

  onRefresh(){
    this.setState({refresh:true})
    this.props.refreshProfile()
    setTimeout(function(){
        this.setState({refresh:false})
    }.bind(this), 500);
  }


  render() {
      
      return (
        <View style={{flex:1}}>
            
            <FlatList
                ListHeaderComponent={() => 
                  <Header user={this.props.user} changeChoice={this.props.changeChoice} choice={this.props.choice} changeFollow={this.props.changeFollow} follow={this.props.follow}/>
                }
                data={this.props.user.ask.list}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={0.2}
                onRefresh={this.onRefresh}
                refreshing={false}
              />

  
        </View>
      );
    
  }
}

export default ListSpitchProfile
