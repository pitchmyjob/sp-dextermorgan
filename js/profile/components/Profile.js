import React, { Component } from 'react';
import { Button} from 'native-base';
import { Text, Image, View, TouchableOpacity, FlatList } from 'react-native';

import styles from '../styles/styles'

import ListSpitch from './ListSpitchProfile'
import ListAsk from './ListAskProfile'


class Profile extends Component {

  constructor(props) { 
    super(props);
    this.changeChoice = this.changeChoice.bind(this)
    this.changeFollow = this.changeFollow.bind(this)
    this.state={
      choice:1,
      follow:false
    }
  }

  changeChoice(choice){
    this.setState({choice})
  }

  changeFollow(follow){
    this.setState({follow})
  }


  render() {
      
      return (
        <View style={{flex:1, backgroundColor:'#ECEFF1'}}>
          
          {this.state.choice == 1 &&
            <ListSpitch 
              refreshProfile={this.props.refreshProfile}
              user={this.props.user} 
              changeChoice={this.changeChoice}
              choice={this.state.choice} 
              nextListSpitch={this.props.nextListSpitch}
              follow={this.state.follow} 
              changeFollow={this.changeFollow} />
          }

          {this.state.choice == 2 &&
            <ListAsk
              refreshProfile={this.props.refreshProfile} 
              user={this.props.user} 
              changeChoice={this.changeChoice} 
              choice={this.state.choice} 
              nextListAsk={this.props.nextListAsk}
              follow={this.state.follow} 
              changeFollow={this.changeFollow} />
          }



        </View>
      );
    
  }
}

export default Profile
