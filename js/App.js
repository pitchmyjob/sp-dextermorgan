 import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Platform, Text } from 'react-native';

import { StyleProvider, Icon } from 'native-base';
import getTheme from '../native-base-theme/components';
import variables from '../native-base-theme/variables/commonColor';
import {reset} from 'redux-form'
import configureStore from './configureStore';

import Home from './scenes/home/homeContainer'
import Login from './scenes/login/loginContainer'
import Register from './scenes/register/registerContainer'
import FacebookForm from './scenes/register/facebookForm/facebookFormContainer'
import RegisterForm from './scenes/register/registerForm/registerFormContainer'
import RegisterPhoto from './scenes/register/registerForm/stepFive/stepFiveContainer'

import Friend from './scenes/friend/friendContainer'
import ListFriend from './scenes/friend/listFriend/listFriendContainer'
import Feed from './scenes/feed/feedContainer'

const ConnectedRouter = connect()(Router);

const heightNavBar = Platform.select({ios: {paddingTop: 64}, android: {paddingTop: 54}, })


class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

class BackButton extends React.Component {
    render(){
        return (
            <Icon name="arrow-back" onPress={() => Actions.pop() }/>
        );
    }
}


const Scenes = Actions.create(
    <Scene key='root' >

        <Scene key="home" initial component={Home} hideNavBar  />

        <Scene key="login" 
          component={Login} title="SE CONNECTER"
          hideNavBar={false} 
          sceneStyle={heightNavBar} navigationBarStyle={{backgroundColor:'white'}} />   

        <Scene key="register"  sceneStyle={heightNavBar} component={Register} hideNavBar={false} title="S'INSCRIRE" navigationBarStyle={{backgroundColor:'white'}}  />  
        <Scene key="facebookForm" sceneStyle={heightNavBar} component={FacebookForm} hideNavBar={false} title="S'INSCRIRE" navigationBarStyle={{backgroundColor:'white'}}  />  
        
        <Scene key="registerForm" 
          component={RegisterForm}
          // renderBackButton={() => <BackButton />}
          hideNavBar={false} 
          navigationBarStyle={{backgroundColor:'transparent', 'borderBottomColor':'white'}} 
          leftButtonIconStyle = {{ tintColor:'#4A4A4A'}}  />

        <Scene key="registerPhoto" 
          component={RegisterPhoto}
          rightTitle="Passer" onRight={() => Actions.friend()} rightButtonTextStyle={{'color':'#BABCBE'}}
          leftButtonIconStyle = {{ tintColor:'#4A4A4A'}}
          navigationBarStyle={{backgroundColor:'transparent', 'borderBottomColor':'white'}} />   

        <Scene key="friend" 
          component={Friend}
          rightTitle="Passer" onRight={() => Actions.tabbar()} rightButtonTextStyle={{'color':'#BABCBE'}}
          sceneStyle={heightNavBar}  navigationBarStyle={{backgroundColor:'white', 'borderBottomColor':'white'}}  />   

        <Scene key="listFriend" sceneStyle={heightNavBar} rightButtonImage={require('../images/close.png')} onRight={() => Actions.tabbar()} component={ListFriend} hideNavBar={false} title="Amis de facebook" navigationBarStyle={{backgroundColor:'white'}}  />   

        <Scene key="tabbar" tabs={true} >
            <Scene key="tab" component={Feed} title="feed" icon={TabIcon}  hideNavBar/>
            <Scene key="tab2" component={Feed} title="search" icon={TabIcon} hideNavBar />
            <Scene key="tab3" component={Feed} title="pitch" icon={TabIcon} hideNavBar />
            <Scene key="tab4" component={Feed} title="truc" icon={TabIcon} hideNavBar />
            <Scene key="tab5" component={Feed} title="logout" icon={TabIcon} hideNavBar />
        </Scene>

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