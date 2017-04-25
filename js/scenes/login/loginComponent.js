import React, { Component } from 'react';

import { Field } from 'redux-form'
import { View, TouchableOpacity, Image, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import { Container, Text, Button, Icon, InputGroup, Input, Form, Item } from 'native-base';

import styles from './styles'

import { renderInput } from '../../utils/forms/renderers'
import { isRequired } from '../../utils/forms/validators'

import { ButtonFacebook, ButtonGradient, ButtonLoaderGradient} from '../../themes/base'

import Facebook from './facebook/facebookContainer'


class Login extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      display:true
    };

    this.keyboardWillShow = this.keyboardWillShow.bind(this)
    this.keyboardWillHide = this.keyboardWillHide.bind(this)
  }

  componentWillMount () {

    if (Platform.OS === 'ios') {
      this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
      this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    } else {
      this.keyboardWillShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
      this.keyboardWillHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
    }

  }

  componentWillUnmount () {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }


  keyboardWillShow () {
    this.setState({display:false})
  }

  keyboardWillHide () {
    this.setState({display:true})
  }


  render() {

    const { handleSubmit, auth } = this.props;

    return (
      <Container style={styles.container}>

      
            {this.state.display &&
                <View style={styles.topcontainer}>

                  <View style={{alignItems: 'center'}}>

                     <Facebook />
                  
                     <Button style={styles.btntwt} iconLeft>
                         <Icon name='logo-twitter' />
                         <Text style={styles.texttwt}>Via Twitter</Text>
                     </Button>

                    </View>

                    <View style={styles.ou} >
                      <Text style={{color:'#BABCBE'}}>Ou</Text>
                    </View>
                </View>
              }

              <KeyboardAvoidingView style={[styles.botcontainer, !this.state.display ? styles.nocenter : '']}>


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
                    <View style={{alignItems: 'center'}}>
                    { auth.loading && 
                        <ButtonLoaderGradient />
                        ||
                        <ButtonGradient onPress={handleSubmit} text="SE CONNECTER" />  
                    }
                    </View>
                </View>

          </KeyboardAvoidingView>


      </Container>
    );
  }
}

export default Login