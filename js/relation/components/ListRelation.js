import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Spinner, Content, Footer, List, ListItem, Thumbnail, Text, Body, Left, Right, Separator, Button, Icon, Item, Input} from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/relation'


class Relation extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if(this.props.list == "follow")
        this.props.listFollow(this.props.id);
    if(this.props.list == "follower")
        this.props.listFollower(this.props.id);
  }

  searchUpdated(search){
     if(this.props.list == "follow") 
        this.props.listFollowSearch(this.props.id, search.trim());
     if(this.props.list == "follower")
        this.props.listFollowerSearch(this.props.id, search.trim());
  }


  renderList(){
      const { fulfilled, error, list } = this.props.relation ;
      const { followFriend, user} = this.props

      if(error){

        return(
          <ListItem >
            <Text style={{color: 'red'}}>Erreur...</Text>
          </ListItem>
        )

      } else if (fulfilled) {

          if(list.length > 0){
              return list.map((friend) => {
                return(
                    <ListItem avatar key={friend.id} style={{paddingTop:5,paddingBottom:5}}>

                        <Left>
                            <Thumbnail small source={{uri:friend.photo+".115x115"}} />
                        </Left>
                        
                        <Body style={{paddingBottom:10}}>
                            <TouchableOpacity onPress={() => Actions.visit({id:friend.id})}>
                                <Text>{friend.first_name} {friend.last_name}</Text>
                                <Text note>@{friend.username}</Text>
                            </TouchableOpacity>
                        </Body>
                        
                        {friend.id != user.id &&
                          <Right>
                            {friend.follow &&
                              <Button small bordered>
                                  <Icon name='checkmark' style={{color:'blue'}}/>
                              </Button>
                              ||
                              <Button small primary onPress={() => followFriend(friend.id) }>
                                  <Text>Suivre </Text>
                              </Button>
                            }
                          </Right>
                        }
                    </ListItem>
                )
              });
          }else{
            return(
                <ListItem style={{ alignItems:'center', 'justifyContent':'center'}}>
                    <Text>Aucun utilisateur trouvé</Text>
                </ListItem>
              )
          }
          

      }else{
          return(
              <View style={{paddingTop:100}}>
                  <Spinner color='#ccc' />
              </View>
            )
      }
  }

  render() {
    

    return (
      <Container style={styles.container}>
        
        <Item>
            <Icon active name='ios-search-outline' style={{paddingLeft:20, paddingRight:10}}/>
            <Input placeholder='Rechercher' onChangeText={(text) => this.searchUpdated(text)} />
        </Item>

        <Content>
          
          {this.renderList()}

        </Content>

      </Container>
    );
  }
}


export default Relation
