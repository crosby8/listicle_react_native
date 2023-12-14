import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";


const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')} />
            <View style={styles.innerContainer}>
                <Text style={styles.title}> You'll Find</Text>
                <Text style={styles.innertitle}> All you need</Text>
                <Text style={styles.title}> Here</Text>
            </View>
            <Button title="Sign Up" />
            
            <TouchableOpacity  > 
                <Text style={styles.footerText}> Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default React.memo(Splash);