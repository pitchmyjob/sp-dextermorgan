import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StatusBar, Button} from 'react-native';
import { Container, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Facebook from '../containers/FacebookContainer'

import styles from '../styles/styles'


import { appAuthToken } from '../../utils/storage' // A ENLEVER

class Home extends Component {

  constructor(props) { 
    super(props);
 
    this.state={
      home:false
    }

  }

  componentDidMount() {
      this.props.verifyAccessToken()
  }

  // A ENLEVER 
  forceLogin(){
      appAuthToken.storeSessionToken("e5d934d25bfd68cba4b252caf6e88965dc71a2b1")
      // appAuthToken.storeSessionToken("9d40d68a23e5bce18c2937e8eda01ab5100c17a7")
  }
  
  // <Button onPress={() => this.forceLogin()} title="login"/>
  

  render() {
    const { auth } = this.props
    return (
      <Container style={styles.container}>
    
        <Image source={require('../../../assets/images/home-bg.png')} style={styles.bgcontainer} >
          
          <View style={styles.topcontainer}>
 
              <Image style={styles.logo} source={require('../../../assets/images/home-logo.png')} />

              {auth.status == "unauthorized" &&
                  <Text style={styles.textlogo}>
                    Spitch
                  </Text>
              }

          </View>

          {auth.status == "unauthorized" &&
            <View style={styles.botcontainer}>

                <Text style={styles.text}>
                    Ask anyone, anything
                </Text>

                <View style={styles.footer}>
                  <View style={{alignItems: 'center', 'paddingBottom':40}}>
                      <Facebook color="white" />
                  </View>
                </View>
            </View>
          }

           
        </Image>
      </Container>
    );
  }
}

export default Home