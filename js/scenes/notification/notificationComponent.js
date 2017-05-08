import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Spinner, Content, Footer, List, ListItem, Thumbnail, Text, Body, Left, Right, Separator, Button, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles'
import { FollowNotification, QuestionNotification } from './typeNotificationComponent'



class Notification extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      notifs: props.notification.lists
    };

  }

  componentDidMount() {
    this.props.listNotification()
  }

  componentWillReceiveProps(newProps){
    if(newProps.notification.fulfilled){
      this.setState({
        notifs: newProps.notification.lists
      })
    }
  }

  renderList(){
     const {user, notification} = this.props

     if(notification.lists.length > 0){

          return(
              <List 
                dataArray={this.state.notifs}
                renderRow={(item) => {
                     if(item.type == 1)
                        return (<FollowNotification item={item}/> )
                     
                     if(item.type == 3)
                        return (<QuestionNotification item={item}/> )
                     
                  }
                }>
            </List>
          )

      }else if(notification.error){ 

        return(
            <Text style={styles.txtimg}>Error</Text>
        )

      }else{

          if(notification.pending){
            return(
                <Spinner color='#ccc' style={{paddingTop:200}}/>
            )
          }else{
            return (
                <List>
                    <ListItem itemHeader>
                         <Text>Aucune notification</Text>
                    </ListItem>
                </List>
            )
          }
      }
  }

  
  render() {

    return (
      <Container>
        <Content>

          {this.renderList()}

        </Content>
      </Container>
    );
  }
}


export default Notification
