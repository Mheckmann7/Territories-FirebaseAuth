import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 
    const [confirmPassword, setConfirmPassword] = useState(); 

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/placeholder.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Create an Account</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
                <FormInput
                labelValue={confirmPassword}
                onChangeText={(confirmUserPassword) => setConfirmPassword(confirmUserPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Sign up"
                onPress={() => alert('signin')}
            />

            <SocialButton
                buttonTitle="Signup with Facebook"
                btnType="facebook"
                color="blue"
                backgroundColor="lightgray"
                onPress={() => {}}
            />
                 <SocialButton
                buttonTitle="Signup with Google"
                btnType="google"
                color="green"
                backgroundColor="lightgray"
                onPress={() => {}}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>Have an account? SignIn</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
        color: 'blue'
    },
    text: {
        marginTop: 10
    }
});