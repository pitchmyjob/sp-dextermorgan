import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { View, TouchableOpacity, Image} from 'react-native';
import { Container, Text, Button, Icon, InputGroup, Input, Form, Item } from 'native-base';

import styles from './styles'

import { renderInput } from '../../utils/forms/renderers'
import { ButtonGradient } from '../../themes/base'



class Login extends Component {

  render() {

    const { handleSubmit } = this.props;

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

          </View>

          <View style={styles.botcontainer}>

                <View style={styles.ou} >
                  <Text style={{color:'#BABCBE'}}>Ou</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                  <Form>
                      <View style={styles.form}>

                          
                           <Field
                              name="email"
                              component={renderInput}
                              placeholder="Adresse email"
                              icon="md-mail"
                            />
                         
                          <Field
                              name="password"
                              secure={true}
                              component={renderInput}
                              placeholder="Mot de passe"
                              icon="md-lock"
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
                    <ButtonGradient handleSubmit={handleSubmit} text="SE CONNECTER" />
                </View>

          </View>


      </Container>
    );
  }
}


const config = {
  form: 'LoginForm',
  onSubmit: (values, dispatch, props) => {
      console.log(values)
  },
}


export default connect(null, null)(reduxForm(config)(Login));