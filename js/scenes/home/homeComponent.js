import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Animated } from 'react-native';
import { Container, Text, Button, Footer } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles'

class Home extends Component {

  constructor(props) { 
    super(props);

    this.state={
      home:false,
      fadeAnim: new Animated.Value(0),
      top:null
    }

  }

  componentDidMount() {
    
    const { verifyAccessToken } = this.props

    setTimeout(() => {
      verifyAccessToken()
    }, 1500)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.status == 'unauthorized'){
      Animated.timing(this.state.fadeAnim, {toValue: 3000, duration: 3000}).start();
      this.setState({home:true})
      this.setState({top:this.moveIn(30,165)})
    }
  }

  fadeIn(delay, from = 0) {
    const {fadeAnim} = this.state; 
    return {
      opacity: fadeAnim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    };
  }

  moveIn(delay, from = 0){
    const {fadeAnim} = this.state; 
    return {
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

    return (
      <Container >

        <Image source={require('../../../images/home-bg.png')} style={styles.container} >
          
          <Animated.View style={[styles.topcontainer, this.state.top]}>
 
              <Image style={styles.logo} source={require('../../../images/home-logo.png')} />
              
              <Text style={styles.textlogo}>
                Spitch
              </Text>

          </Animated.View>

          {this.state.home && 
            <Animated.View style={[styles.botcontainer, this.fadeIn(100, -20)]}>
              <View style={styles.botcontainer}>

                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet cons ecteur um lorem sed do eiusmod tempor 
                    dolore magna aliqua !
                </Text>

              </View>

              <View style={styles.footer}>
                <View style={{alignItems: 'center'}}>
                  <Button bordered style={styles.button1} onPress={Actions.login}>
                       <Text style={styles.textbutton1}>SE CONNECTER</Text>
                   </Button>

                    <Button style={styles.button2} onPress={Actions.register}>
                       <Text style={styles.textbutton2}>S'INSCRIRE</Text>
                   </Button>
                </View>
              </View>
              </Animated.View>
        }


        </Image>
      </Container>
    );
  }
}

export default Home
