import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Icon, Button } from 'native-base';
import { AccessToken, LoginManager } from 'react-native-fbsdk'

import styles from '../../../themes/styles'


class Facebook extends Component {

  constructor(props) { 
    super(props);

    this.state={
    }
    this._responseInfoCallback = this._responseInfoCallback.bind(this)
  }



  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
        this.props.authFacebook(result)
    }
  }

  facebook(){
      
      LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
        function(result) {
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {

              AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.props.authFacebook(data.accessToken.toString())
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

    return (
        <Button style={styles.buttonFacebook} iconLeft onPress={() => this.facebook()}>
           <Icon name='logo-facebook' />
           <Text style={styles.textFacebook}>Via Facebook</Text>
        </Button>
    );
  }
}

export default Facebook
