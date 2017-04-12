import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Button, Icon, InputGroup, Input, Form } from 'native-base';

import styles from './styles'

class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>

          <View style={styles.topcontainer}>

            <View style={{alignItems: 'center'}}>

               <Button style={styles.btnfb} iconLeft>
                   <Icon name='logo-facebook' />
                   <Text style={styles.textfb}>Via Facebook</Text>
               </Button>
            
               <Button style={styles.btntwt} iconLeft>
                   <Icon name='logo-twitter' />
                   <Text style={styles.texttwt}>Via Twitter</Text>
               </Button>

              </View>

              <View style={styles.ou} >
                  <Text style={{color:'#BABCBE'}}>Ou</Text>
              </View>

          </View>

          <Content style={styles.botcontainer}>
              <Form>
                  <InputGroup>
                        <Icon name='md-mail' style={{color:'#000000'}}/>
                        <Input placeholder='Adresse e-mail'/>
                  </InputGroup>

                  <InputGroup>
                        <Icon name='md-lock' style={{color:'#000000', paddingLeft:8}}/>
                        <Input placeholder='Adresse e-mail'/>
                  </InputGroup>

              </Form>
          </Content>


      </Container>
    );
  }
}


export default connect()(Login);