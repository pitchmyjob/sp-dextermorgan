import React, { Component } from 'react';
import { TouchableOpacity, Image} from 'react-native';
import { Text, Icon, Button } from 'native-base';

import styles from './styles'

export class ButtonGradient extends Component {

  render() {

      const { onPress } = this.props;

      return (
          <TouchableOpacity style={styles.buttonGradient} onPress={onPress} >
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


export class ButtonFacebook extends Component {

  render() {

      const { onPress } = this.props;

      return (
           <Button style={styles.buttonFacebook} iconLeft onPress={onPress}>
             <Icon name='logo-facebook' />
             <Text style={styles.textFacebook}>{this.props.text}</Text>
          </Button>
      )
  }
}