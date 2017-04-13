import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Text, Button, Footer, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { LoginButton, AccessToken, LoginManager , GraphRequest,
  GraphRequestManager,} from 'react-native-fbsdk'

import { twitter } from 'react-native-simple-auth';

import styles from './styles'



class Register extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};

    

  }

  gotwitter(){
      twitter({
        appId: 'L9Ox3oTMSJ6DfNpNmrRQP3gpe',
        appSecret: 'N6uDtuTOY2dVoAzshGPGiksPHEaWkIiUJSf26YmvDuia8iuU9h',
        callback: 'spitchapp://',
      }).then((info) => {
          console.log(info)
      }).catch((error) => {
        // error.code
        // error.description
      });
  }

  _responseInfoCallback(error: ?Object, result: ?Object) {
  if (error) {
    console.log('Error fetching data: ' + error.toString());
  } else {
    console.log(result);
  }
}

  facebook(){
      LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
        function(result) {
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
            console.log('Login success with permissions: '
              +result.grantedPermissions.toString());

              AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
          }
        },
        function(error) {
          alert('Login fail with error: ' + error);
        }
      );


      const infoRequest = new GraphRequest(
        '/me',
        null,
        this._responseInfoCallback,
      );
      // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();

    console.log(infoRequest)
  }

  render() {
    return (
      <Container style={styles.container}>
        
        <View style={{alignItems: 'center'}}>

              <Button style={styles.btnfb} iconLeft onPress={() => this.facebook()}>
                 <Icon name='logo-facebook' />
                 <Text style={styles.textfb}>Via Facebook</Text>
              </Button>
          
             <Button style={styles.btntwt} iconLeft onPress={() => this.gotwitter()}>
                 <Icon name='logo-twitter' />
                 <Text style={styles.texttwt}>Via Twitter</Text>
             </Button>

             <TouchableOpacity>
               <Text style={styles.txt}>
                 Ou inscrivez vous avec votre
               </Text>
               <Text style={styles.email}>
                 adresse e-mail
               </Text>
             </TouchableOpacity>

          </View>

        
      </Container>
    );
  }
}


export default connect()(Register);