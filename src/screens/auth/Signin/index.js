import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import Authenticator from '../../../components/Authenticator';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import Googlelogin from '../../../components/Googlelogin';


const Signin = () => {

    const [checked, setChecked] = useState(false);
    
    const onSignUp = () => {

    }
    return (
        <View style={styles.container}>
            <Authenticator title='Login' />
            <Input label='Email' placeholder="example@gmail.com" />
            <Input isPassword label='Password' placeholder="********" />
            
            <Button style={styles.register} title="Login" />
            <Separator text='Or Login with Google' />
            <Googlelogin />

            <View>
                <Text style={styles.footerText}>Don't have an account?
                    <Text onPress={onSignUp} style={styles.footerTextLogin}>  Register Now</Text>
                </Text>
            </View>
        </View> 
    )
};


export default React.memo(Signin)