import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 


    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/placeholder.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Territories</Text>
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
            <FormButton
                buttonTitle="Sign In"
                onPress={() => alert('signin')}
            />

            <SocialButton
                buttonTitle="Signin with Facebook"
                btnType="facebook"
                color="blue"
                backgroundColor="lightgray"
                onPress={() => {}}
            />
                 <SocialButton
                buttonTitle="Signin with Google"
                btnType="google"
                color="green"
                backgroundColor="lightgray"
                onPress={() => {}}
            />


            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.text}>Create an Account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

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