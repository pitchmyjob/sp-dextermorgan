import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Text, Button, Footer, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles'

class Register extends Component {
  render() {
    return (
      <Container style={styles.container}>
        
        <View style={{alignItems: 'center'}}>

              <Button style={styles.btnfb} iconLeft>
                 <Icon name='logo-facebook' />
                 <Text style={styles.textfb}>Via Facebook</Text>
              </Button>
          
             <Button style={styles.btntwt} iconLeft>
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