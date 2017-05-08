import React, { Component, Dimensions } from 'react';
import { Image, TouchableOpacity, ListView, TextInput } from 'react-native';
import { Container, Content, Text, Item, Icon, Input, View, Thumbnail, List, ListItem, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { truncate } from '../../utils/string'
import styles from './styles'


class Search extends Component {

  constructor(props) { 
    super(props);
    const dsS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dsT = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state={
      dataSpitcher: dsS.cloneWithRows(props.spitchers.lists),
      dataTags: dsT.cloneWithRows(props.tags.lists),
    }
  }

  componentDidMount() {
    this.props.listTopSpitcher()
    this.props.listTopTag()
  }

  componentWillReceiveProps(newProps){
    if(newProps.spitchers.fulfilled && !this.props.spitchers.fulfilled){
      this.setState({
        dataSpitcher: this.state.dataSpitcher.cloneWithRows(newProps.spitchers.lists)
      })
    }
    if(newProps.tags.fulfilled && !this.props.tags.fulfilled){
      this.setState({
        dataTags: this.state.dataTags.cloneWithRows(newProps.tags.lists)
      })
    }
  }

  renderTopSpitcher(){
    const { spitchers } = this.props

    if(spitchers.lists.length > 0){

        return(
            <ListView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              // style={{flex:1}}
              dataSource={this.state.dataSpitcher}
              renderRow={(item) => (
                  <TouchableOpacity key={item.id} style={styles.item} onPress={() => Actions.profile_user({id:item.id, title:item.username})} >
                      <Thumbnail source={{uri:item.photo+".115x115"}} style={styles.img}/>
                      <Text style={styles.txtimg}>{truncate(item.username)}</Text>
                  </TouchableOpacity>
                )}
              /> 
        )

    }else if(spitchers.error){

      return(
          <Text style={styles.txtimg}>Error</Text>
      )

    }else{

        return(
            <Spinner color='#ccc'/>
        )

    }

  }

  renderTopTag(){
      const { tags } = this.props

      if(tags.lists.length > 0){
          return(
              <ListView
                dataSource={this.state.dataTags}
                renderRow={(item) => (
                      <TouchableOpacity key={item.id} style={styles.itemtag}>
                        <Text style={styles.itemtagtxt}>#{item.tag}</Text>
                      </TouchableOpacity>
                  )}
                /> 
          )
      }else if(tags.error){ 

        return(
            <Text style={styles.txtimg}>Error</Text>
        )

      }else{

          return(
              <Spinner color='#ccc'/>
          )

      }
  }

  render() {
    const {user, search} = this.props

    return (
      <Container style={{marginBottom: 50}}>
          <Content style={{paddingTop:20}}>

            <Item>
                <Icon active name='ios-search-outline' style={{paddingLeft:20, paddingRight:10}}/>
                <Input 
                    placeholder='Que recherchez vous ?'
                    returnKeyType='search'
                    onSubmitEditing={() => console.log('ok')} />
            </Item>

            <View style={styles.spitcher}>
                <Text style={styles.txtspitcher}>
                  Discover the spitchers
                </Text>

                {this.renderTopSpitcher()}

            </View>

            {this.renderTopTag()}
        
          
          </Content>
      </Container>
    );
  }
}

export default Search
