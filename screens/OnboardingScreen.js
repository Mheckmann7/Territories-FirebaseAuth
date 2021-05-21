import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 14 }}
        {...props}
    ><Text style={{fontSize: 16, color: "white"}}>Done</Text></TouchableOpacity>
)

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            DoneButtonComponent={Done} //custom button (can change back to check)
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
        pages={[
            {
                    backgroundColor: 'blue',
                    // image: <Image source={require('../assets/onboarding1.jpg')} />, 
                    title: 'Onboarding',
                    subtitle: 'subtitle'

                },
                {
                    backgroundColor: 'green',
                    // image: <Image source={require('../assets/onboarding2.jpg')} />, 
                    title: 'Onboarding2',
                    subtitle: 'subtitle'
    
                },
                {
                    backgroundColor: 'purple',
                    // image: <Image source={require('../assets/onboarding2.jpg')} />, 
                    title: 'Onboarding3',
                    subtitle: 'subtitle'

                },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});