import React, { Component } from 'react';
import { Field } from 'redux-form'

import { Image, View, TouchableOpacity, Animated, KeyboardAvoidingView} from 'react-native';
import { Container, Text, Button, Footer, Icon } from 'native-base';

import { renderInput } from '../../../utils/forms/renderers'
import { isRequired } from '../../../utils/forms/validators'
import { ButtonGradient } from '../../../themes/base'

import styles from './styles'



class RegisterForm extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      fadeAnim: new Animated.Value(0),
      'step': 1
    };
  }

  componentDidMount() {
      Animated.timing(this.state.fadeAnim, {toValue: 3000, duration: 3000}).start();
  }


  fadeIn(delay, from = 0) {
    const {fadeAnim} = this.state;
    return {
      opacity: fadeAnim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [{
        translateY: fadeAnim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      }],
    };
  }

  render() {

    const { handleSubmit, auth } = this.props;

    return (
      <Container style={styles.container}>

      
        <View style={styles.topcontainer}>

          <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                  <Image
                    source={require('../../../../images/picture.png')} 
                  />
              </TouchableOpacity>            
          </View>
          

        </View>
        <KeyboardAvoidingView style={styles.botcontainer} behavior="padding">
            <View style={{alignItems: 'center'}}>
                <View style={[styles.form]}>

                  <Animated.View style={this.fadeIn(50, -20)}>
                      <Field
                        name="username"
                        component={renderInput}
                        placeholder="Nom d'utilisateur"
                        icon="md-person"
                        //validate={isRequired}
                      />
                    </Animated.View>

                  <Animated.View style={this.fadeIn(150, -20)}>
                    <Field
                        name="email"
                        component={renderInput}
                        placeholder="Adresse email"
                        icon="md-mail"
                        //validate={isRequired}
                      />
                  </Animated.View>
        
              
                    <Animated.View style={this.fadeIn(250, -20)}>
                        <Field
                          name="name"
                          component={renderInput}
                          placeholder="Nom complet"
                          icon="md-person"
                        />
                    </Animated.View>

                    <Animated.View style={this.fadeIn(350, -20)}>
                        <Field
                            name="password"
                            secure={true}
                            component={renderInput}
                            placeholder="Mot de passe"
                            icon="md-lock"
                            //validate={isRequired}
                          />
                      </Animated.View>
                    
                      
                </View>
            </View>
            <View style={styles.footer}>
                <ButtonGradient onPress={handleSubmit} text="S'INSCRIRE" />
            </View>
        </KeyboardAvoidingView>


      </Container>
    );
  }
}

export default RegisterForm
