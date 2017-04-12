import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Text, Button, Footer } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles'

class Home extends Component {
  render() {
    return (
      <Container >

        <Image source={require('../../../images/home-bg.png')} style={styles.container} >
          
          <View style={styles.topcontainer}>
 
              <Image style={styles.logo} source={require('../../../images/home-logo.png')} />
              
              <Text style={styles.textlogo}>
                Spitch
              </Text>

          </View>

          <View style={styles.botcontainer}>

            <Text style={styles.text}>
                Lorem ipsum dolor sit amet cons ecteur um lorem sed do eiusmod tempor 
                dolore magna aliqua !
            </Text>

              
             
          </View>

          <View style={styles.footer}>

            <View style={{alignItems: 'center'}}>
                  <Button bordered style={styles.button1} onPress={Actions.login}>
                       <Text style={styles.textbutton1}>SE CONNECTER</Text>
                   </Button>

                    <Button style={styles.button2} >
                       <Text style={styles.textbutton2}>S'INSCRIRE</Text>
                   </Button>
              </View>

          </View>


        </Image>
      </Container>
    );
  }
}


export default connect()(Home);