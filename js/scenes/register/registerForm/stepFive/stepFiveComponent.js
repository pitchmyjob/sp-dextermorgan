import React, { Component } from 'react';
import { Field } from 'redux-form'
import { Actions } from 'react-native-router-flux';

import { View, Animated, TouchableOpacity, Image} from 'react-native';
import { Text, Footer, Body } from 'native-base';

import { renderInput } from '../../../../utils/forms/renderers'
import { isRequired, minLength } from '../../../../utils/forms/validators'
import { ButtonTransparent } from '../../../../themes/base'

import styles from '../styles'



class StepFive extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      fadeAnim: new Animated.Value(0),
      'step': 1
    };
  }


  render() {

    return (
        <View style={styles.topcontainer}>
          <View style={styles.topcontainer}>
            <TouchableOpacity>
                <Image
                  source={require('../../../../../images/picture.png')} 
                />
            </TouchableOpacity>        
            <Text style={{paddingTop:20}}>
              Ajouter une photo 
            </Text>
          </View>
        </View>
    );
  }
}

export default StepFive
