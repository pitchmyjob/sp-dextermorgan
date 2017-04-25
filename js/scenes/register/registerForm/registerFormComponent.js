import React, { Component } from 'react';
import { Field } from 'redux-form'

import { Image, View, TouchableOpacity, Animated, KeyboardAvoidingView} from 'react-native';
import { Container, Text, Button, Footer, Icon, Spinner, Content} from 'native-base';

import { renderInput } from '../../../utils/forms/renderers'
import { isRequired } from '../../../utils/forms/validators'
import { ButtonGradient } from '../../../themes/base'

import StepOneContainer from './stepOne/stepOneContainer'
import StepTwoContainer from './stepTwo/stepTwoContainer'
import StepThreeContainer from './stepThree/stepThreeContainer'
import StepFourContainer from './stepFour/stepFourContainer'

import styles from './styles'



class RegisterForm extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      'step': 1
    };

    this.nextStep = this.nextStep.bind(this)
  }

  componentWillMount() {
    this.props.reset()
  }

  nextStep() {
    this.setState({step:this.state.step + 1})
  }


  render() {

    const { step } = this.state

    return (
      <Container style={styles.container}>

          {step === 1 && <StepOneContainer nextStep={this.nextStep} />}
          {step === 2 && <StepTwoContainer nextStep={this.nextStep} />}
          {step === 3 && <StepThreeContainer nextStep={this.nextStep} />}
          {step === 4 && <StepFourContainer nextStep={this.nextStep} />}

      </Container>
    );
  }
}

export default RegisterForm
