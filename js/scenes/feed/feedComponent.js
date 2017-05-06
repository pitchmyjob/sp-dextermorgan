import React, { Component, Dimensions } from 'react';
import { Image, View, TouchableOpacity, Animated } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { ButtonTransparent } from '../../themes/base'
import styles from './styles'

class Feed extends Component {

  constructor(props) { 
    super(props);
    this.state={}
  }


  render() {
    const { user } = this.props
    return (
      <Container style={styles.container}>

          <Item style={styles.ask} onPress={ () => Actions.ask() }>
              <Image source={{uri:user.profile.photo}} style={styles.imguser} />
              <Text style={{color:'#9B9B9B'}}>
                  Posez votre question
              </Text>
          </Item>

          <Content>

              <Card style={styles.card}>
                  <CardItem>
                      <Left>
                          <Thumbnail source={{uri:user.profile.photo}} small circular/>
                          <Body>
                              <Text>Toinandu22</Text>
                              <Text note small>Il y a 5 min</Text>
                          </Body>
                      </Left>
                        <Right>
                          <Icon name="ios-more" />
                       </Right>
                    </CardItem>
                    <CardItem cardBody>
                        <Image 
                          source={{uri:"https://s3-eu-west-1.amazonaws.com/spitchdev-bucket-uwfmzpv98dvk/media/default/51258639.jpg"}}
                          style={{width:400, height:300}}
                        >
                          <Text style={styles.txtImage}>
                              Suis-je bonne ?
                          </Text>
                        </Image>
                    </CardItem>
                    <CardItem style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>

                          <View style={{alignItems: 'center'}}>

                            <Button transparent>
                                <Icon name="ios-heart-outline" />
                                <Text>5</Text>
                            </Button>

                          </View>
                      </View>

                      <View style={{flex:2}}>
                          <Button bordered outline block onPress={() => this.props.logout()}>
                                <Text>Spitch !</Text>
                          </Button>
                      </View>

                  </CardItem>
             </Card>

          

          </Content>
      </Container>
    );
  }
}

export default Feed
