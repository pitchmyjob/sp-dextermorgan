import React, { Component } from 'react';
import { Field } from 'redux-form'

import { View, Animated, KeyboardAvoidingView} from 'react-native';
import { Text, Footer, Spinner, Body} from 'native-base';

import { renderInput } from '../../../../utils/forms/renderers'
import { isEmail, isRequired } from '../../../../utils/forms/validators'
import { ButtonGradient, ButtonLoaderGradient } from '../../../../themes/base'

import styles from '../styles'

const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
    'submitSucceeded', 'submitFailed'];


class StepTwo extends Component {

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

    const { handleSubmit } = this.props

    return (
        <View style={styles.topcontainer}>
          <KeyboardAvoidingView style={styles.topcontainer}>
              <View style={{alignItems: 'center'}}>
                  <View style={[styles.form]}>

                      <Text style={{textAlign:'center', paddingBottom:10, fontSize:20}}>
                        Quelle est votre email ?
                      </Text>

                      <Text style={{textAlign:'center', paddingBottom:20, paddingTop:15, fontSize:14}}>
                        Nous ne vous enverrons pas de spam.
                      </Text>

                      <Animated.View style={this.fadeIn(50, 0)}>
                        <Field
                          name="email"
                          component={renderInput}
                          placeholder="Adresse email"
                          icon="md-person"
                          validate={[isRequired, isEmail]}
                        />
                      </Animated.View>

                  </View>
              </View>

          </KeyboardAvoidingView>

          <Footer style={styles.footer}>
              <Body style={styles.bodyfooter}>
              { this.props.submitting &&
                <ButtonLoaderGradient />
                ||
                <ButtonGradient onPress={handleSubmit} text="CONTINUER" />
              }
              </Body>
          </Footer>
        </View>
    );
  }
}

export default StepTwo
