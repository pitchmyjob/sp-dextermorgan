import React, { Component, Dimensions } from 'react';
import { Image, TouchableOpacity, ListView, TextInput } from 'react-native';
import { Container, Content, Text, Item, Icon, Input, Right, View, Thumbnail, Spinner, Card, CardItem, Left, Body, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles'
import { parseDate } from '../../utils/date'


class Spitch extends Component {

  constructor(props) { 
    super(props);
  }

  componentDidMount() {
    this.props.listAsk()
  }

  renderDayAsk(){

    return (
        <Card style={styles.card}>
              <CardItem >
                   <Left>
                        <Thumbnail source={{uri:"https://s3-eu-west-1.amazonaws.com/spitchdev-bucket-uwfmzpv98dvk/media/default/ic_launcher.png.115x115"}} small square/>
                        
                        <Body>
                            <Text style={{fontWeight:'500', fontSize:15}}>La question du jour</Text>
                            <Text note small>Il y 10 min</Text>
                        </Body>
                   </Left>     
                </CardItem>
                <CardItem >
                    <Text style={{fontWeight:'300'}}> d gfdg dfgfd gdf gdfgdf g ? </Text>
              </CardItem>
          </Card>
    )
  }


  renderListAsk(){
    const { ask } = this.props

      if(ask.lists.length > 0){

          return ask.lists.map((ask) => {
              return(
                    <Card style={styles.card} key={ask.id}>
                      <CardItem >
                           <Left>
                                <Thumbnail source={{uri:ask.user.photo+".115x115"}} small circular/>
                                
                                <Body>
                                    <Text style={{fontWeight:'500', fontSize:15}}>{ask.user.username}</Text>
                                    <Text note small>{parseDate(ask.created)}</Text>
                                </Body>
                           </Left>     
                        </CardItem>
                        <CardItem >
                            <Text style={{fontWeight:'300'}}> {ask.text} </Text>
                      </CardItem>

                        <CardItem > 
                            <Body>
                              <Button bordered outline block onPress={() => Actions.recorder({id:ask.id})}>
                                    <Text>Spitcher</Text>
                              </Button>
                            </Body>
                        </CardItem>
                    </Card>
              )
          });

      }else if(ask.error){

        return(
            <Text style={styles.txtimg}>Error</Text>
        )

      }else{

          return(
              <Spinner color='#ccc' style={{paddingTop:150}}/>
          )

      }
  }
 

  render() {
    const {user, search} = this.props

    return (
      <Container style={{marginBottom: 50}}>
          <Content style={styles.content}>

            <Item style={styles.search}>
                <Icon active name='ios-search-outline' style={{paddingLeft:20, paddingRight:10}}/>
                <Input 
                    placeholder='Que recherchez vous ?'
                    returnKeyType='search'
                    onSubmitEditing={() => console.log('ok')} />
            </Item>

            {this.renderDayAsk()}

            <Card style={styles.separator} itemDivider />

            {this.renderListAsk()}
          
          </Content>
      </Container>
    );
  }
}

export default Spitch
