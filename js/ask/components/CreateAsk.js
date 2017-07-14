import React, { Component} from 'react';
import { Field } from 'redux-form'
import { Image, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Container, Text, Body, Item, Input } from 'native-base';
import { ButtonGradient, ButtonLoaderGradient } from '../../themes/base'

import { renderInputAsk } from '../../utils/forms/renderers'
import { isRequired, minLength } from '../../utils/forms/validators'

import styles from '../styles/create'

class CreateAsk extends Component {

  constructor(props) { 
    super(props);
  }



  render() {

    const { handleSubmit, user, ask } = this.props;

    return (
      <Container style={styles.container}>

          <View style={[styles.body, Platform.select({ios: {height:210}, android: {height:120}, }) ]}>

              <Item style={{borderColor:'transparent'}}>
                  <Image source={{uri:user.photo}} style={styles.imguser} />
                   
                    <Field
                      name="text"
                      component={renderInputAsk}
                      placeholder="Posez votre question à la communauté"
                      validate={[isRequired, minLength(3)]}
                    />
              </Item>

          </View>

          <View style={styles.footer}>
                <Text style={styles.footertxt}>
                  Ajoutez des # pour toucher un
                </Text>
                <Text style={styles.footertxt}>
                   maximum d'utilisateurs.
                </Text>

                <View style={styles.btn}>
                  <View style={{alignItems: 'center'}}>
                    { ask.pending && 
                      <ButtonLoaderGradient />
                    ||
                      <ButtonGradient onPress={handleSubmit} text="ENVOYER AU SPITCHER" />
                    }
                  </View>
                </View>
               
          </View>

      </Container>
    );
  }
}

export default CreateAsk
