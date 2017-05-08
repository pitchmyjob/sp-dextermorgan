import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Spinner, Content, Footer, List, ListItem, Thumbnail, Text, Body, Left, Right, Separator, Button, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';

import { parseDate } from '../../utils/date'
import styles from './styles'


export class FollowNotification extends Component {

  render() {
    const { item } = this.props
    return (
        <ListItem itemHeader style={{paddingBottom:15, paddingTop:15}}>
            <Thumbnail style={styles.imguser} source={{uri:item.user.photo}} />
            <Body>
            	<TouchableOpacity onPress={() => Actions.profile_user({id:item.user.id, title:item.user.username})}>
	                <Text style={styles.txt}> 
	                    <Text style={styles.name}>{item.user.username} </Text>
	                    vous suit
	                </Text>
	                <Text small note>{parseDate(item.timestamp*1000)}</Text>
                </TouchableOpacity>
            </Body>
        </ListItem>
    )
  }
}


export class QuestionNotification extends Component {

  render() {
    const { item } = this.props
    return (
        <ListItem itemHeader style={{paddingBottom:15, paddingTop:15}}>
            <Thumbnail style={styles.imguser} source={{uri:item.user.photo}} />
            <Body>
                <Text style={styles.txt}> 
                    <Text style={styles.name}>{item.user.username} </Text>
                    a posé une nouvelle question : 
                    "<Text style={styles.question}>{item.obj.text}</Text>"
                </Text>
                <Text small note>{parseDate(item.timestamp*1000)}</Text>
            </Body>
        </ListItem>
    )
  }
}