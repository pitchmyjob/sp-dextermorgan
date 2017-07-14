import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/settings'


class UserSettings extends Component {

  constructor(props) { 
    super(props);
    this.state={
    }
  }


  render() {
    const { user, logout } = this.props

    return(
      <Container>
          <Content>

                  <ListItem itemDivider >
                      <Text>Mon compte</Text>
                  </ListItem>  

                  <ListItem icon >
                      <Body >
                        <Text>Email</Text>
                      </Body>
                      <Right>
                          <Text>{user.email}</Text>
                          <Icon name="arrow-forward" />
                      </Right>
                  </ListItem>

                  <ListItem icon last>
                      <Body>
                        <Text>Mot de passe</Text>
                      </Body>
                      <Right>
                          <Icon name="arrow-forward" />
                      </Right>
                  </ListItem>

                  <ListItem itemDivider>
                      <Text>Notification</Text>
                  </ListItem> 

                  <ListItem icon>
                      <Body>
                        <Text>Notification</Text>
                      </Body>
                      <Right>
                          <Switch value={true} />
                      </Right>
                  </ListItem> 

                  <ListItem >
                      <TouchableOpacity onPress={() => logout() }>
                          <Text style={{color:'red'}}>Déconnexion</Text>
                      </TouchableOpacity>
                  </ListItem> 

                 
 
          </Content>
      </Container>
    );
    
  }
}

export default UserSettings
