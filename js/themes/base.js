import React, { Component } from 'react';
import { TouchableOpacity, Image} from 'react-native';
import { Text } from 'native-base';

import styles from './styles'

export class ButtonGradient extends Component {

  render() {

      const { handleSubmit } = this.props;

      return (
          <TouchableOpacity style={styles.buttonGradient} onPress={handleSubmit} >
            <Image 
                source={require('../../images/btn.png')}
                style={styles.imageButtonGradient}>
                
                <Text style={styles.textButtonGradient}>
                  {this.props.text}
                </Text>
              </Image>
          </TouchableOpacity>
      )
  }
}