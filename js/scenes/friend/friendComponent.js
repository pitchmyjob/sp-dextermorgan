
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Text, Button, Footer, Icon, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { AccessToken, LoginManager } from 'react-native-fbsdk'

import styles from './styles'

import { ButtonFacebook } from '../../themes/base'

export default class Friend extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};

  }

  facebookList(){

    if(this.props.user.profile.fb){
      Actions.listFriend()
    }else{
      this.permissionFacebook()
    }

  }


  permissionFacebook(){

      LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
        function(result) {
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
              AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.props.generateFacebookList(data.accessToken.toString())
                  }
                )
          }
        }.bind(this),
        function(error) {
          alert('Login fail with error: ' + error);
        }
      );

  }


  render() {

    const { user, relation } = this.props;

    return (
      <Container style={styles.container}>
        
        <View style={styles.topcontainer}>
            
          <Image source={require('../../../images/effect.png')} style={styles.bguser}>
            <View style={{alignItems: 'center'}}>
                <Image source={{uri:user.profile.photo}}style={styles.imguser} />
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

              { relation.pending &&
                <Spinner color='blue' />
                ||
                <ButtonFacebook text="Retrouver via Facebook" onPress={() => this.facebookList()}/>
              }

            </View>
          
        </View>

      </Container>
    );
  }
}




