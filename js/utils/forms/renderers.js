import React from 'react';
import { Icon, InputGroup, Input, Text, Content } from 'native-base';

import styles from '../../themes/styles'

export const renderInput = (field) => {
    const { input, meta, ...props } = field;
    const { onChange } = input;

    return (
        <InputGroup style={field.meta.touched && field.meta.error && styles.inputGroupError || styles.inputGroup} >
            <Icon name={field.icon} style={{color:'#4A4A4A'}}/>
            <Input placeholder={field.placeholder} onChange={onChange} {...input} {...props} secureTextEntry={field.secure}  />
            {field.meta.touched && field.meta.error && <Icon name='ios-close-circle' style={{color:'red'}}/> }
        </InputGroup>
    );
};