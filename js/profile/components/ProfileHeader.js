import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Thumbnail, Item, Body, Left, Text, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/styles'


class Header extends Component {

  constructor(props) { 
    super(props);
    this.followVisit = this.followVisit.bind(this)
  }


  followVisit(id){
    this.props.followUser(id)
    this.props.changeFollow(true)
  }

  renderButtonFollow(){
    const { user } = this.props

    return(
      <View>
          {user.profile.data.follow &&
            <View style={styles.btn}>
               <Button primary block small bordered style={styles.btnSize}>
                    <Text style={styles.btnWeight}>Abonnée</Text>
                </Button> 
            </View>
          }

          {!user.profile.data.follow && !this.props.follow &&
            <View style={styles.btn}>
               <Button primary block small style={styles.btnSize} onPress={() => this.followVisit(user.profile.data.id) }>
                    <Text style={styles.btnWeightAbo}>S'abonner</Text>
                </Button>
            </View>
          }

          {this.props.follow && 
            <View style={styles.btn}>
               <Button primary block small bordered style={styles.btnSize}>
                    <Text style={styles.btnWeight}>Abonnée</Text>
                </Button> 
            </View>
          }
      </View>
    )
   }


  renderDatas(){
    const { user } = this.props
    return(
        <View style={styles.datas}>
            <View style={{flex: 1, alignItems: 'center'}}>

                <Text style={{fontWeight:"400", color:"blue"}}>
                  {user.datas.data ? user.datas.data.videos : ''}
                </Text>
                <Text style={{fontWeight: '300'}}>
                  Videos
                </Text>
          
            </View>
            <TouchableOpacity 
              style={{flex: 1, alignItems: 'center', borderRightWidth: 1, borderLeftWidth:1, borderColor:"#ccc"}} 
              onPress={() => Actions.relation({id:user.profile.data.id, list:'follower'})} >
                
                <Text style={{fontWeight:"400", color:"blue"}}>
                  {user.datas.data ? user.datas.data.followers : ''}
                </Text>
                <Text style={{fontWeight: '300'}}>
                  Followers
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => Actions.relation({id:user.profile.data.id, list:'follow'})}>
                
                <Text style={{fontWeight:"400", color:"blue"}}>
                  {user.datas.data ? user.datas.data.follows : ''}
                </Text>
                <Text style={{fontWeight: '300'}}>
                  Follows
                </Text>

            </TouchableOpacity>

      </View>
    )
  }


  render() {
    const { user } = this.props


    return (
      <View>
	        <View style={styles.header}>
          
            <Image source={{uri:user.profile.data.photo}} style={styles.headerBackground}>



              <Image source={require('../../../assets/images/fond.png')} style={{flex: 1, height:100, zIndex: 0}} />

              <Thumbnail source={{uri:user.profile.data.photo+".115x115"}} circular style={styles.thumb}/>

                  <Body style={styles.headerBottom}>
                      <Text style={{color:"black", fontSize:16, fontWeight:'500', 'paddingTop': 10}}>{user.profile.data.first_name} {user.profile.data.last_name}</Text>
                      <Text note>{user.profile.data.title && user.profile.data.title || "Ajoutez une description"}</Text>
                  </Body>

              </Image>

              {user.profile.data.follow === undefined &&
                <TouchableOpacity style={styles.iconContact} onPress={() => Actions.contact()}>
                    <Icon name="ios-person-add-outline"  style={{color:'white'}}/>
                </TouchableOpacity>
              }

              {user.profile.data.follow === undefined &&
                <TouchableOpacity style={styles.iconSetting} onPress={() => Actions.settings()}>
                    <Icon name="ios-settings-outline"  style={{color:'white'}}/>
                </TouchableOpacity>
              }

         </View>

         {this.renderDatas()}

         {user.profile.data.follow === undefined &&
          <View style={styles.btn}>
              <Button dark bordered block small style={styles.btnSize} onPress={() => Actions.userupdate()}>
                  <Text style={styles.btnWeight}>Modifier le profil</Text>
              </Button>
          </View>
          ||
          this.renderButtonFollow()
          }


          <View style={{flexDirection: 'row',flex:1}}>

            <TouchableOpacity style={styles.btnChoice} onPress={() => this.props.changeChoice(1)}>
              <Text style={this.props.choice == 1 ? styles.btnSelect : styles.btnNoSelect} >
                Mes spitchs 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnChoice} onPress={() => this.props.changeChoice(2)}>
              <Text style={this.props.choice == 2 ? styles.btnSelect : styles.btnNoSelect} >
                Mes questions
              </Text>
            </TouchableOpacity>

          </View>




	    </View>
    );
  }
}

export default Header