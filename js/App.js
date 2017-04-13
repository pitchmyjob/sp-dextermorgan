import React, { Component } from 'react';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { Platform } from 'react-native';

import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import variables from '../native-base-theme/variables/commonColor';

import configureStore from './configureStore';
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import registerForm from './components/register/registerForm'


const ConnectedRouter = connect()(Router);

const heightNavBar = Platform.select({ios: {paddingTop: 64}, android: {paddingTop: 54}, })

const Scenes = Actions.create(
    <Scene key='root' >
        <Scene key="home" component={Home} hideNavBar />
        <Scene key="login" sceneStyle={heightNavBar} component={Login} hideNavBar={false} title="SE CONNECTER" navigationBarStyle={{backgroundColor:'white'}}  />   
        
        <Scene key="register" sceneStyle={heightNavBar} component={Register} hideNavBar={false} title="S'INSCRIRE" navigationBarStyle={{backgroundColor:'white'}}  />   
        <Scene key="registerForm" initial={true} sceneStyle={heightNavBar} component={registerForm} navigationBarStyle={{backgroundColor:'white'}}  />   
        

    </Scene>
);

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
          <ConnectedRouter scenes={Scenes} /> 
      </StyleProvider>
    );
  }
}


export default App; 