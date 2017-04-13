import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Text, Button, Footer, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { renderInput } from '../../../utils/forms/renderers'
import { ButtonGradient } from '../../../themes/base'

import styles from './styles'



class RegisterForm extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};

  }

  render() {

    const { handleSubmit } = this.props;

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

        <View style={styles.botcontainer}>

            <View style={{alignItems: 'center'}}>
                <View style={styles.form}>

                    
                     <Field
                        name="email"
                        component={renderInput}
                        placeholder="Adresse email"
                        icon="md-mail"
                      />

                      <Field
                        name="email"
                        component={renderInput}
                        placeholder="Adresse email"
                        icon="md-person"
                      />

                      <Field
                        name="email"
                        component={renderInput}
                        placeholder="Adresse email"
                        icon="md-person"
                      />
                   
                    <Field
                        name="password"
                        secure={true}
                        component={renderInput}
                        placeholder="Mot de passe"
                        icon="md-lock"
                      />


                </View>
            </View>


            <View style={styles.footer}>
                    <ButtonGradient handleSubmit={handleSubmit} text="S'INSCRIRE" />
            </View>
        </View>

      </Container>
    );
  }
}


const config = {
  form: 'RegisterForm',
  onSubmit: (values, dispatch, props) => {
      console.log(values)
  },
}


export default connect(null, null)(reduxForm(config)(RegisterForm));