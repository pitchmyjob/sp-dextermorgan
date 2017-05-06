import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Animated } from 'react-native';
import { Container, Content, Text, Button, Footer, Thumbnail, Item, Body, Left, Card, Tab, Tabs, TabHeading, CardItem, Icon, Right, Spinner  } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles'

import User from './user/userContainer'
import Datas from './user/datas/datasContainer'
import Feed from './user/feed/feedComponent'



class Profile extends Component {

  constructor(props) { 
    super(props);
    this.state={
      profile:null,
      follow:false
    }
  }

  test(){

  }

  componentWillMount() {
    if(this.props.id && this.props.id != this.props.user.profile.id){
      this.setState({profile:this.props.id})
    }
    else{
      this.setState({profile:"me"})
    }
  }

  componentDidMount() {
    this.props.retreiveUser(this.state.profile)
  }

  followUser(id){
      this.setState({follow:true})
      this.props.followUser(id)
  }

  renderProfile(user){
      if(user.pending){
        return (
            <Spinner color="#ccc"/>
        )

      }else if(user.fulfilled){
        return (
            <Content style={styles.content}>

                <User profile={user.profile} />
                <Datas datas={user.datas} id={user.profile.id}/>

                {this.state.follow && 
                    <View style={styles.btn}>
                       <Button primary block small bordered style={styles.btnSize}>
                            <Text style={styles.btnWeight}>Abonnée</Text>
                        </Button> 
                    </View>
                ||
                <View style={styles.btn}>
                   {user.profile.follow  && 
                        <Button primary block small bordered style={styles.btnSize}>
                            <Text style={styles.btnWeight}>Abonnée</Text>
                        </Button> 
                    ||
                        <Button primary block small style={styles.btnSize} onPress={() => this.followUser(user.profile.id) }>
                            <Text style={styles.btnWeight}>S'abonner</Text>
                        </Button>
                  } 
                </View>
                }

                <Feed asks={user.asks} spitchs={user.spitchs} user={user.profile} />
                
            </Content>
          
        );
      }else{
          return(
            <Text>
              Erreur
            </Text>
          )
      }
  }

  renderMe(user){
      if(user.me.datas){
        return (
              <Content style={styles.content}>
                  <User profile={user.profile} />
                  <Datas datas={user.me.datas} id={user.profile.id}/>

                  <View style={styles.btn}>
                      <Button dark bordered block small style={styles.btnSize} onPress={() => Actions.editProfile()}>
                          <Text style={styles.btnWeight}>Modifier le profil</Text>
                      </Button>
                  </View>

                  <Feed asks={user.me.asks} spitchs={user.me.spitchs} user={user.profile} />
              </Content>
          );
      } else if (user.me.pending) {
          return(
            <Spinner color="#ccc"/>
          )
      } else {
        return(
            <Text>
              Erreur
            </Text>
          )
      }
  }

  render() {
    const { user } = this.props

    return(
      <Container style={{marginBottom: 50}}>
        { this.state.profile == "me" &&
          this.renderMe(user)
          ||
          this.renderProfile(user.visit)
        }
      </Container>
    );
    
  }
}

export default Profile
