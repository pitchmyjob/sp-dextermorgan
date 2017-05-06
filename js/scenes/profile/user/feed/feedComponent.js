import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Tabs, Tab, Card, CardItem, Left, Thumbnail, Body, Right, Icon} from 'native-base';

import styles from '../../styles'

const styleHeading = {
  textStyle:{color:"black"},
  activeTextStyle:{color:"#2665cd"},
  tabStyle: {backgroundColor:"white"},
  activeTabStyle:{backgroundColor:"white"},
  style: {backgroundColor:"transparent"}
}

class Feed extends Component {



  renderAsks(){
      const { asks, user } = this.props

      return asks.map((ask) => {

          return(
                <Card style={styles.card} key={ask.id}>
                    <CardItem >
                        <Left>
                            <Thumbnail source={{uri:user.photo+".30x30"}} small circular/>
                            <Body>
                                <Text style={{fontWeight:'500', fontSize:15}}>{user.username}</Text>
                                <Text note small>3 min</Text>
                            </Body>
                        </Left>
                          <Right>
                            <Icon name="ios-more" />
                         </Right>

                      </CardItem>
                      <CardItem >
                          <Text style={{fontWeight:'300'}}> {ask.text} </Text>
                    </CardItem>
                </Card>
          )
      });
  }

  render() {
    
    return (
  	  <Tabs tabBarUnderlineStyle={{ backgroundColor: 'blue', height:0 }} style={{borderTopWidth:1, borderColor:"#ccc"}} >
          <Tab heading="Spitch" {...styleHeading }>
             
          </Tab>

          <Tab heading="Questions" {...styleHeading }>
            {this.renderAsks()}
          </Tab>
      </Tabs>
    );
  }
}

export default Feed
