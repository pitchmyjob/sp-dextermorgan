import React from 'react';
import { Icon, InputGroup, Input } from 'native-base';

import styles from '../../themes/styles'

export const renderInput = (field) => {
    const { input, meta, ...props } = field;
    const { onChange } = input;

    return (
        <InputGroup style={styles.inputGroup}>
            <Icon name={field.icon} style={{color:'#4A4A4A'}}/>
            <Input placeholder={field.placeholder} onChangeText={onChange} {...input} {...props} secureTextEntry={field.secure}  />
        </InputGroup>
    );
};