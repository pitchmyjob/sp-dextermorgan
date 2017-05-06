import React, { Component } from 'react';
import { View } from 'react-native';
import { Thumbnail, Item, Body, Left, Text  } from 'native-base';

import styles from '../styles'

class User extends Component {

  render() {
  	const { profile } = this.props

    return (
      	<View style={styles.header}>
	        <Item style={{borderColor:"white"}}>
	            
	              <Thumbnail 
	                source={{uri:profile.photo+".115x115"}} circular style={{width:60, height:60}}/>
	                
	              <Body style={{"alignItems":"flex-start", paddingLeft:20}}>
	                  <Text style={{color:"black", fontSize:16, fontWeight:'500'}}>{profile.username}</Text>
	                  <Text note>{profile.title && profile.title || "Ajoutez une description"}</Text>
	              </Body>
	        </Item>
	    </View>
    );
  }
}

export default User