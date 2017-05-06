 import React, { Component } from 'react';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Platform, Text, Image } from 'react-native';

import { StyleProvider, Icon, View } from 'native-base';
import getTheme from '../native-base-theme/components';
import variables from '../native-base-theme/variables/commonColor';
import {reset} from 'redux-form'
import configureStore from './configureStore';

import PushController from './pushController'

import Home from './scenes/home/homeContainer'
import Login from './scenes/login/loginContainer'
import Register from './scenes/register/registerContainer'
import FacebookForm from './scenes/register/facebookForm/facebookFormContainer'
import RegisterForm from './scenes/register/registerForm/registerFormContainer'
import RegisterPhoto from './scenes/register/registerForm/stepFive/stepFiveContainer'

import Friend from './scenes/friend/friendContainer'
import ListFriend from './scenes/friend/listFriend/listFriendContainer'
import Feed from './scenes/feed/feedContainer'
import Profile from './scenes/profile/profileContainer'
import EditProfile from './scenes/profile/edit/editContainer'
import Relation from './scenes/profile/relation/relationContainer'
import Settings from './scenes/settings/settingsContainer'

import Ask from './scenes/ask/askContainer'

const ConnectedRouter = connect()(Router);

const heightNavBar = Platform.select({ios: {paddingTop: 64}, android: {paddingTop: 54}, })
const heightTabBar = Platform.select({ios: {marginBottom: 50}, android: {marginBottom: 54}, })


class TabIcon extends React.Component {

    constructor(props) {
      super(props);
    
      this.state = {};

      console.log(this.props.iconName)
    }

    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

const tab = ({ selected, title, iconName }) => {
  const selectColor = selected ? '#ED1B25' : '#FFF'
  if(iconName){
      return (
        <Icon name={iconName} style={{color: selected ? '#0064D4' :'black'}} />
      )
  }else{
    return (
      <Image source={require('../images/spitch.png')} style={{"marginBottom":15}}/>
    )
  }  
}


class BackButton extends React.Component {
    render(){
        return (
            <Icon name="arrow-back" onPress={() => Actions.pop() }/>
        );
    }
}

class SettingsButton extends React.Component {
    render(){
        const { id } = this.props.state
        if(!id)
        {
            return (
                <Icon name="ios-settings-outline" style={{paddingRight:10, color:'#595959'}} onPress={() => Actions.settings() }/>
            );
        }
        return null
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

        <Scene key="tabbar" component={PushController} >
          <Scene key="tabbar2" tabs={true} style={{borderTopWidth:1, borderTopColor: '#cccccc', backgroundColor:'white'}} >

              <Scene 
                key="feed" title="Spitch"
                component={Feed} 
                sceneStyle={heightNavBar} navigationBarStyle={{backgroundColor:'white', 'borderBottomColor':'white'}} titleStyle={{fontSize: 18, fontWeight:'500'}}
                icon={tab} iconName="ios-albums-outline" />

              <Scene key="tab2" component={Feed} title="search" icon={tab} iconName="ios-search-outline" hideNavBar />
              <Scene key="tab3" title="spitch" component={Feed} icon={tab} hideNavBar />
              <Scene key="tab4" component={Feed} title="truc" icon={tab} iconName="ios-square-outline" hideNavBar />

              <Scene key="profile" icon={tab} iconName="md-person"  initial >
                <Scene 
                  key="profile_user" title="Mon profil" 
                  component={Profile} 
                  renderRightButton={(state) => <SettingsButton state={state} />} 
                  sceneStyle={heightNavBar}  navigationBarStyle={{backgroundColor:'white', 'borderBottomColor':'white'}} titleStyle={{fontSize: 18, fontWeight:'500'}} />

                <Scene 
                  key="profile_relation" 
                  component={Relation} 
                  sceneStyle={heightNavBar}  navigationBarStyle={{backgroundColor:'white', 'borderBottomColor':'white'}} titleStyle={{fontSize: 18, fontWeight:'500'}} />

              </Scene>

          </Scene>
        </Scene>

        <Scene 
          key="editProfile" title="Modifier mon profil"
          component={EditProfile} 
          sceneStyle={heightNavBar}  hideNavBar={false}  navigationBarStyle={{backgroundColor:'white', 'borderBottomColor':'white'}}  /> 

        <Scene 
          key="settings" title="Parametre du compte"
          component={Settings} 
          sceneStyle={heightNavBar} navigationBarStyle={{backgroundColor:'white', 'borderBottomColor':'white'}}  />   

        <Scene key="ask" title="Posez votre question" direction="vertical"
                component={Ask} icon={tab} sceneStyle={[heightNavBar]} 
                renderBackButton={()=>(null)}
                rightButtonImage={require('../images/close.png')} onRight={() => Actions.pop()}
                navigationBarStyle={{backgroundColor:'transparent', 'borderBottomColor':'#cccccc'}}  />

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