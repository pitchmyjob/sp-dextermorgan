import React, { Component } from 'react';

import { Field } from 'redux-form'
import { View, TouchableOpacity, Image} from 'react-native';
import { Container, Text, Button, Icon, InputGroup, Input, Form, Item } from 'native-base';

import styles from './styles'

import { renderInput } from '../../utils/forms/renderers'
import { isRequired } from '../../utils/forms/validators'

import { ButtonFacebook, ButtonGradient } from '../../themes/base'

import Facebook from './facebook/facebookContainer'


class Login extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }


  render() {

    const { handleSubmit } = this.props;

    return (
      <Container style={styles.container}>

          <View style={styles.topcontainer}>

            <View style={{alignItems: 'center'}}>

               <Facebook />
            
               <Button style={styles.btntwt} iconLeft>
                   <Icon name='logo-twitter' />
                   <Text style={styles.texttwt}>Via Twitter</Text>
               </Button>

              </View>

          </View>

          <View style={styles.botcontainer}>

                <View style={styles.ou} >
                  <Text style={{color:'#BABCBE'}}>Ou</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                  <Form>
                      <View style={styles.form}>

                          
                           <Field
                              name="username"
                              component={renderInput}
                              placeholder="Nom d'utilisateur ou email"
                              icon="md-person"
                              validate={isRequired}
                            />
                         
                          <Field
                              name="password"
                              secure={true}
                              component={renderInput}
                              placeholder="Mot de passe"
                              icon="md-lock"
                              validate={isRequired}
                            />

                            <TouchableOpacity style={{alignItems: 'flex-end'}}>
                                <Text style={styles.forgetpwd}>
                                    Mot de passe oublié ?
                                </Text>
                            </TouchableOpacity>

                      </View>

                  </Form>
                </View>
              

                <View style={styles.footer}>
                    <ButtonGradient onPress={handleSubmit} text="SE CONNECTER" />
                </View>

          </View>


      </Container>
    );
  }
}

export default Login