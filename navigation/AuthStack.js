import React, { useEffect, useState } from 'react';
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignupScreen from "../screens/SignupScreen";
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {AsyncStorage} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator(); 

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;
    
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        })
    }, []);
    if (isFirstLaunch === null) {
        return null; 
    } else if (isFirstLaunch === true) {
        routename = "Onboarding";
    } else {
    routeName = 'Login';
    }
        
    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#fff',
                        shadowColor: '#fff',
                        elevation: 0
                    },
                    headerLeft: () => (
                        <View style={{marginLeft: 10}}>
                            <Icon.Button
                                name="long-arrow-left"
                                size={25}
                                color="black"
                                backgroundColor="white"
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    ),
                })} />
        </Stack.Navigator>
    );
};

export default AuthStack; 