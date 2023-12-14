import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import Authenticator from '../../../components/Authenticator';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import Googlelogin from '../../../components/Googlelogin';


const SignUp = () => {

    const [checked, setChecked] = useState(false);
    
    const onSignIn = () => {

    }
    return (
        <View style={styles.container}>
            <Authenticator title='Sign Up' />
            <Input label='Name' placeholder="Gideon Abrokwa" />
            <Input label='Email' placeholder="example@gmail.com" />
            <Input isPassword label='Password' placeholder="********" />
            <Input isPassword label='Confirm Password' placeholder="********" />
            <View style={styles.agree}>
                <Checkbox oncheck={setChecked} checked={checked} />
                <Text style={styles.textAgree}> accept all <Text style={styles.textAgreeBold}>Terms</Text> and <Text style={styles.textAgreeBold}>Conditions</Text></Text>
            </View>
            <Button style={styles.register} title="Register" />
            <Separator text='Or Register with Google' />
            <Googlelogin />

            <View>
                <Text style={styles.footerText}>Already have and account?
                    <Text onPress={onSignIn} style={styles.footerTextLogin}>  Login</Text>
                </Text>
            </View>
        </View> 
    )
};


export default React.memo(SignUp)