import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ title,handlePress,style }) => {
   
    return (
        <TouchableOpacity  onPress={handlePress} style={[styles.container, style]} activeOpacity={0.6} >
            <Text style={styles.title}> {title} </Text>
        </TouchableOpacity>

            /* 
                <Pressable hitSlop=(20) onPress={handlePress} style={styles.container} >
                    <Text> {title} </Text>
                </Pressable>
            */
    );
};

export default Button 

