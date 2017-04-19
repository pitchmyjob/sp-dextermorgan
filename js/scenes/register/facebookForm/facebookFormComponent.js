import React, { Component } from 'react';
import { Field } from 'redux-form'

import { Image, View, TouchableOpacity, Animated} from 'react-native';
import { Container, Text, Button, Footer, InputGroup, Input, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { LoginButton, AccessToken, LoginManager , GraphRequest,
  GraphRequestManager,} from 'react-native-fbsdk'

import { renderInput } from '../../../utils/forms/renderers'
import { isRequired } from '../../../utils/forms/validators'

import { ButtonGradient } from '../../../themes/base'

import styles from './styles'



class FacebookForm extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      form:false
    };

    this._responseInfoCallback = this._responseInfoCallback.bind(this)

    const infoRequest = new GraphRequest(
        '/me?fields=first_name,last_name,email,picture.type(normal)',
        null,
        this._responseInfoCallback,
      );

      new GraphRequestManager().addRequest(infoRequest).start();

  }

  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {

        this.props.change('email', result.email);
        this.props.change('first_name', result.first_name);
        this.props.change('last_name', result.last_name);
        this.props.change('photo', result.picture.data.url);
        this.props.change('login_type', 'facebook');
        this.props.change('login_id', result.id);

        this.setState({
          form:true,
          photo:result.picture.data.url,
          first_name:result.first_name
        })
    }
  }


  render() {


    const { handleSubmit, auth, fields } = this.props;

    return (
      <Container style={styles.container}>
        {this.state.form && 
          <View style={[styles.container, styles.padcontainer]}>

            <View style={{alignItems: 'center'}}>
                <Image source={require('../../../../images/effect.png')} style={styles.bguser}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={{uri:this.state.photo}} style={styles.imguser} />
                    </View>
                </Image>

              <Text style={styles.textwelcolme}>
                 Hello {this.state.first_name}
              </Text>

              <View style={styles.form}>
                  <Field
                        name="username"
                        component={renderInput}
                        placeholder="Nom d'utilisateur"
                        icon="md-mail"
                        validate={isRequired}
                      />
              </View>
                
            </View>

              
            <View style={styles.footer}>
                  <ButtonGradient onPress={handleSubmit} text="S'INSCRIRE"/>
              </View>
          </View> 
          || 
          <Text style={{}}> Loading </Text>
        }
      </Container>
    );
  }
}


export default FacebookForm