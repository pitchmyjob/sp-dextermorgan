
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Spinner, Content, Footer, List, ListItem, Thumbnail, Text, Body, Left, Right, Separator, Button, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/facebook'


class ListFriend extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};

  }

  componentDidMount() {
    this.props.listFacebookFriend();
  }

  follow(id) {
      fr = this.props.relation.list.map(function(item) {
         if(item.id == id)
            item.follow=true
          return item
      });
  }


  renderList(){
      const { facebook } = this.props;

      if(facebook.error){

        return(
          <ListItem >
            <Text style={{color: 'red'}}>Erreur...</Text>
          </ListItem>
        )

      } else if (facebook.fulfilled) {

        return facebook.list.map((friend, index) => {

          return(
              <ListItem avatar key={index}>
                  <Left>
                      <Thumbnail small source={require('../../../assets/images/user.png')} />
                  </Left>
                  <Body>
                      <Text>{friend.first_name} {friend.last_name}</Text>
                      <Text note>@{friend.username}</Text>
                  </Body>
                  <Right>
                    {friend.follow &&
                      <Button small bordered>
                          <Icon name='checkmark' style={{color:'blue'}}/>
                      </Button>
                      ||
                      <Button small primary onPress={() => this.props.followUser(friend.id) }>
                          <Text>Suivre </Text>
                      </Button>
                    }
                  </Right>
              </ListItem>
          )
        });

      }else{
          return(
              <ListItem style={{ alignItems:'center', 'justifyContent':'center'}}>
                  <Spinner color='blue' />
              </ListItem>
            )
      }
  }

  render() {
    

    return (
      <Container style={styles.container}>
        
        <Content>
            <Separator bordered>
                  <Text>Nouveau</Text>
            </Separator>

             <List>
                {this.renderList()}
             </List>


        </Content>

         <Footer transparant style={styles.footer}>
            <View style={{alignItems: 'center'}}>
                  <Button style={styles.buttonfooter} onPress={ () => this.props.followAll()}>
                      <Text>Suivre tous</Text>
                  </Button>
            </View> 
          </Footer>

      </Container>
    );
  }
}


export default ListFriend
