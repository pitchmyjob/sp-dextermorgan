
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Text, Button, Footer, Icon, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { AccessToken, LoginManager } from 'react-native-fbsdk'

import styles from '../styles/contact'

import { ButtonFacebook } from '../../themes/base'

export default class Friend extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};

  }



  render() {

    const { user } = this.props;

    return (
      <Container style={styles.container}>
        
        <View style={styles.topcontainer}>
            
          <Image source={require('../../../assets/images/effect.png')} style={styles.bguser}>
            <View style={{alignItems: 'center'}}>
                <Image source={{uri:user.photo}}style={styles.imguser} />
            </View>
          </Image>

          <Text style={styles.text}>
            Certains de vos contacts sont peut-être déjà sur spitch
          </Text>
           <Text style={styles.text}>
            Retrouvez les dès maintenant.
          </Text>
          

        </View>

        <View style={styles.botcontainer}>

            <View style={{alignItems: 'center'}}>

              <ButtonFacebook text="Retrouver via Facebook" onPress={() => Actions.listFacebook()}/>

            </View>
          
        </View>

      </Container>
    );
  }
}




