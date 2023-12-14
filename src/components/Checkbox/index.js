import React from 'react';
import {  Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Checkbox = ({ checked,oncheck,text }) => {
   
    return (
        <TouchableOpacity  onPress={() => oncheck(!checked)} style={styles.container} activeOpacity={0.6} >
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checked} source={require('../../assets/check.png')} />
                </View>
            ): null }
        </TouchableOpacity>

            /* 
                <Pressable hitSlop=(20) onPress={handlePress} style={styles.container} >
                    <Text> {title} </Text>
                </Pressable>
            */
    );
};

export default Checkbox 

