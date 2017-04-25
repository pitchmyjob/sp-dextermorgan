import React from 'react';
import { Icon, InputGroup, Input, Text, Content, Item, Label, View } from 'native-base';

import styles from '../../themes/styles'

export const renderInput = (field) => {
    const { input, meta, ...props } = field;
    const { onChange, ...restProps } = input;
 
    return (
            <View>
                <Item floatingLabel style={field.meta.touched && field.meta.error && styles.inputGroupError || styles.inputGroup} >
                    <Label>{field.placeholder}</Label>
                    <Input  
                        {...restProps} 
                    	onChange={onChange} 
                        secureTextEntry={field.secure}  />
                </Item>
                {field.meta.touched && field.meta.error && 1 == 2 && <Icon name='ios-close-circle' style={{color:'red'}}/> }
                {field.meta.touched && field.meta.error && <Text note small > {field.meta.error} </Text>}
            </View>
            
    );
};