import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Animated } from 'react-native';
import { Container, Text, Button, Footer } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles'

class Feed extends Component {

  constructor(props) { 
    super(props);
    this.state={}
  }


  render() {

    return (
      <Container >

        <View style={{alignItems: 'center', paddingTop:200}}>
              <Text style={styles.dg}>
                  BONJOUR ENCULE
              </Text>
        </View>

      </Container>
    );
  }
}

export default Feed
