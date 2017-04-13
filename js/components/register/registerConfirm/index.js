
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Text, Button, Footer, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles'



class RegisterConfirm extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};

  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <Container style={styles.container}>
        
        <View style={styles.topcontainer}>

            
        </View>

      </Container>
    );
  }
}





export default connect(null, null)(RegisterConfirm);