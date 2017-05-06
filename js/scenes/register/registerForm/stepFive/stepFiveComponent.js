import React, { Component } from 'react'

import { View, TouchableOpacity, Image} from 'react-native';
import { Text, Spinner, Footer, Body } from 'native-base';

import ImagePicker from 'react-native-image-crop-picker'

import styles from '../styles'





class StepFive extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      'step': 1,
      'image': false
    };
  }

  picker(){
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      cropperCircleOverlay: true,
      compressImageQuality:1,
      includeBase64:true,
      mediaType:'photo',
      showCropGuidelines:false
    }).then(image => {
        this.setState({
          image: {uri: image.path, width: 200, height: 200}
        });
        this.props.addPhotoUser(image.data)

    }).catch(e => console.log(e));;

  }


  render() {

    const { user } = this.props

    return (
        <View style={styles.topcontainer}>
          <View style={styles.topcontainer}>
            <TouchableOpacity onPress={() => this.picker()}>
              {this.state.image &&

                <Image
                  source={this.state.image}
                  style={{
                    width:150,
                    height:150,
                    borderRadius: 75
                  }} 
                />

                ||
                <Image
                  source={require('../../../../../images/picture.png')} 
                />
                }

            </TouchableOpacity>        
            <Text style={{paddingTop:25, fontSize:18}}>
              Ajouter une photo de profil
            </Text>

            <Text style={{paddingTop:20, textAlign:'center'}} note>
              Ajoutez une photo de profil pour que vos amis vous reconnaissent
            </Text>

          </View>

          
            <Footer style={styles.footer}>
              <Body style={styles.bodyfooter}>
                { user.loading &&
                  <Spinner color='blue' />
                }
              </Body>
            </Footer>
          

        </View>
    );
  }
}

export default StepFive
