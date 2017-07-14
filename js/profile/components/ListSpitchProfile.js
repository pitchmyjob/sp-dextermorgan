import React, { Component } from 'react';
import { Button, Spinner} from 'native-base';
import { Text, Image, View, TouchableOpacity, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/styles'

import Header from '../containers/ProfileHeaderContainer'


class ListSpitchProfile extends Component {

  constructor(props) { 
    super(props);
    this.onEndReached = this.onEndReached.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.state={ 
      refresh:false
    }
  }

  renderItem({item}){

    if(item.loader){
      return ( 
        <View style={{alignItems: 'center', flex:1}}> 
            <Spinner color='white' />
        </View>
      )

    }else{
    return (  
        <TouchableOpacity onPress={() => Actions.video({item:item})} >
            <Image
              key={item.id}
              style={styles.thumbSpitch} 
              source={{uri:item.thumb+".115x115"}} >

                  <Text style={styles.thumbText}>
                     {item.ask.text}
                  </Text>
            </Image>
        </TouchableOpacity>
      )
    }
  }

  onEndReached(){
      this.props.nextListSpitch()
  }

  onRefresh(){
    this.setState({refresh:true})
    this.props.refreshProfile()
    setTimeout(function(){
        this.setState({refresh:false})
    }.bind(this), 500);
  }

  render() {
      
      return (
        <View style={{flex:1}}>
            
            <FlatList
                ListHeaderComponent={() => 
                  <Header user={this.props.user} changeChoice={this.props.changeChoice} choice={this.props.choice} changeFollow={this.props.changeFollow} follow={this.props.follow}  />
                }
                data={this.props.user.spitch.list}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                horizontal={false}
                numColumns={2}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={0.2}
                onRefresh={this.onRefresh}
                refreshing={this.state.refresh}
              />

  
        </View>
      );
    
  }
}

export default ListSpitchProfile
