import React, { Component } from 'react';
import { View , TouchableOpacity} from 'react-native';
import {  Text  } from 'native-base';

import { Actions } from 'react-native-router-flux';

import styles from '../../styles'

class Datas extends Component {

  render() {
    const { id } = this.props;
    const { videos, follows, followers } = this.props.datas
    return (
      	<View style={styles.datas}>
              <View style={{flex: 1, alignItems: 'center'}}>

                  <Text style={{fontWeight:"bold", color:"blue"}}>
                    {videos}
                  </Text>
                  <Text style={{fontWeight: '300'}}>
                    Videos
                  </Text>
            
              </View>
              <TouchableOpacity 
                style={{flex: 1, alignItems: 'center', borderRightWidth: 1, borderLeftWidth:1, borderColor:"#ccc"}} 
                onPress={() => Actions.profile_relation({title:'Abonné', id:id, list:'follower'})} >
                  
                  <Text style={{fontWeight:"bold", color:"blue"}}>
                    {followers}
                  </Text>
                  <Text style={{fontWeight: '300'}}>
                    Followers
                  </Text>

              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => Actions.profile_relation({title:'Abonné', id:id, list:'follow'})}>
                  
                  <Text style={{fontWeight:"bold", color:"blue"}}>
                    {follows}
                  </Text>
                  <Text style={{fontWeight: '300'}}>
                    Follows
                  </Text>

              </TouchableOpacity>
        </View>
    );
  }
}

export default Datas