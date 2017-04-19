import React, { Component } from 'react';
import { Field } from 'redux-form'

import { Image, View, TouchableOpacity, Animated} from 'react-native';
import { Container, Text, Button, Footer, InputGroup, Input, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { LoginButton, AccessToken, LoginManager , GraphRequest,
  GraphRequestManager,} from 'react-native-fbsdk'

import { twitter } from 'react-native-simple-auth';
import { renderInput } from '../../utils/forms/renderers'
import { isRequired } from '../../utils/forms/validators'

import { ButtonFacebook, ButtonGradient } from '../../themes/base'
import Facebook from '../login/facebook/facebookContainer'

import styles from './styles'


import uuidV1 from 'uuid'



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




  render() {
    const { handleSubmit, auth, fields } = this.props;

    return (
      <Container style={styles.container}>
          <View style={styles.container}>
              <Facebook />
            
               <Button style={styles.btntwt} iconLeft onPress={() => this.gotwitter()}>
                   <Icon name='logo-twitter' />
                   <Text style={styles.texttwt}>Via Twitter</Text>
               </Button>

               <TouchableOpacity onPress={() => Actions.registerForm() }>
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


export default Register