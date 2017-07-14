 import React, { Component } from 'react';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Platform, Text, Image } from 'react-native';
import { StyleProvider, Icon, View } from 'native-base';
import getTheme from '../native-base-theme/components';
import variables from '../native-base-theme/variables/commonColor';

import configureStore from './configureStore';

import PushController from './pushController'

import Home from './auth/containers/HomeContainer'
import FacebookForm from './auth/containers/FacebookFormContainer'

import Contact from './relation/containers/ContactContainer'
import ListFacebook from './relation/containers/ListFacebookContainer'
import ListRelation from './relation/containers/ListRelationContainer'

import UserProfile from './user/containers/UserProfileContainer'
import UserUpdate from './user/containers/UserUpdateContainer'
import UserSettings from './user/containers/UserSettingsContainer'

import VisitProfile from './visit/containers/VisitProfileContainer'

import SwipeAsk from './ask/containers/SwipeAskContainer'
import CreateAsk from './ask/containers/CreateAskContainer'

import Recorder from './spitch/containers/RecorderContainer'
import Replay from './spitch/containers/ReplayContainer'
import Share from './spitch/containers/ShareContainer'
import Video from './spitch/containers/VideoContainer'

import ListFeed from './feed/containers/ListFeedContainer'


const ConnectedRouter = connect()(Router);

const heightNavBar = Platform.select({ios: {paddingTop: 64}, android: {paddingTop: 54}, })
const heightTabBar = Platform.select({ios: {marginBottom: 50}, android: {marginBottom: 50}, })

const sceneNavTransparent ={
    navigationBarStyle: {backgroundColor:'transparent', 'borderBottomColor':'transparent'},
    leftButtonIconStyle: {'tintColor':'#4A4A4A'}
}
const sceneStyle = {
  sceneStyle: heightNavBar,
  navigationBarStyle: {backgroundColor:'white'},
  leftButtonIconStyle: {'tintColor':'#4A4A4A'}
}
const sceneStyleNoBorder = {
  ...sceneStyle,
  navigationBarStyle: {backgroundColor:'white', 'borderBottomColor':'white'}
}
const sceneStyleTabbar = {
  ...sceneStyle,
  sceneStyle: [heightNavBar, heightTabBar],
  navigationBarStyle: {backgroundColor:'white', 'borderBottomColor':'white'}
}


class CloseButton extends React.Component {
    render(){
      return (
          <Icon name="ios-close-outline" onPress={this.props.onPress} style={{...this.props.styles, fontSize:34, marginRight:10, backgroundColor:'transparent'}}/>
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
        <Image source={require('../assets/images/tabbarspitch.png')} style={{ width:50, height:50}}/>
    )
  }  
}

const Scenes = Actions.create(
    <Scene key='root' >

        <Scene key="home" initial component={Home} hideNavBar  />
        <Scene {...sceneStyle} key="facebookForm"  component={FacebookForm} title="S'INSCRIRE"   />  
        <Scene {...sceneStyleNoBorder} key="contact" component={Contact} rightButtonTextStyle={{'color':'#BABCBE'}} />   
        <Scene {...sceneStyle} key="listFacebook"  component={ListFacebook}  title="Amis de facebook"  />

        <Scene key="tabbar" component={PushController} >
            <Scene key="tabbar2" tabs={true} style={{borderTopWidth:1, borderTopColor: '#cccccc', backgroundColor:'white'}} >


                <Scene {...sceneStyleTabbar} key="feed" title="Spitch" icon={tab} iconName="ios-albums-outline" component={ListFeed} titleStyle={{fontSize: 20, fontWeight:'500'}}/>

                <Scene key="spitch" title="" component={() => null} icon={tab}  hideTabBar 
                  onSelect={() => Actions.swipeask()}  />

                <Scene key="user" icon={tab} iconName="md-person" hideNavBar component={UserProfile} />

                
            </Scene>
        </Scene>

        <Scene {...sceneStyleNoBorder} key="userupdate" title="Modifier mon profil" component={UserUpdate}   /> 
        <Scene {...sceneStyleNoBorder} key="settings" title="Parametre du compte" component={UserSettings} /> 
        <Scene {...sceneStyleNoBorder} key="relation" component={ListRelation} title="Abonné" titleStyle={{fontSize: 18, fontWeight:'500'}} /> 

        <Scene {...sceneNavTransparent} key="visit" component={VisitProfile} leftButtonIconStyle={{'tintColor':'white'}} hideNavBar={false}/> 

        <Scene {...sceneNavTransparent} key="swipeask" component={SwipeAsk}  direction="vertical" renderBackButton={()=>(null)} 
              renderRightButton={() => <CloseButton styles={{color:'white'}} onPress={() => Actions.pop()} />} />

        <Scene key="recorder" showNavigationBar={false}  animation="fade" component={Recorder} hideNavBar />
        <Scene key="replay" showNavigationBar={false}  component={Replay} hideNavBar />
        <Scene key="video" showNavigationBar={false} component={Video} hideNavBar animation="fade" />

        <Scene {...sceneStyle} key="share" title="Partager" direction="vertical" component={Share} renderBackButton={()=>(null)} 
              renderRightButton={() => <CloseButton styles={{color:'#4A4A4A'}} onPress={() => Actions.tabbar({type:ActionConst.RESET})} />}/>

        <Scene {...sceneStyleNoBorder} key="ask" title="Posez votre question" direction="vertical" component={CreateAsk} icon={tab} renderBackButton={()=>(null)}
                renderRightButton={() => <CloseButton styles={{color:'#4A4A4A'}} onPress={() => Actions.pop()} />}/>


    </Scene>
);

// <Scene {...sceneStyle} key="listFacebook" hideBackImage component={ListFacebook}  title="Amis de facebook" 
          // renderRightButton={() => <CloseButton onPress={() => Actions.tabbar({type: ActionConst.REPLACE}) }/>} />

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