import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Map from '../Map';
import HomeScreen from '../HomeScreen';
import Profile from '../Profile';

import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function MainTabScreen(props) {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            activeColor="white"
            shifting = {true}
            style={{ backgroundColor: '#E94F46' }}>
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#E94F46',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapStackScreen}
                options={{
                    tabBarLabel: 'Map',
                    tabBarColor: '#E94F46',
                    tabBarIcon: ({ color }) => (
                        <Icon name="map-pin" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#E94F46',
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#E94F46',
      }
    }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Territories',
          headerLeft: () => (
            <Icon.Button name="bars" size={25} backgroundColor='#E94F46'
              onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}
      />
    </HomeStack.Navigator>
  )
  
  const MapStackScreen = ({navigation}) => (
    <MapStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#E94F46',
        }
        
    }}>
          <MapStack.Screen name="Map" component={Map}
          options={{
          title: 'Territories',
          headerLeft: () => (
            <Icon.Button name="bars" size={25} backgroundColor='#E94F46'
              onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}/>
    </MapStack.Navigator>
  )
  const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#E94F46',
      }
    }}>
          <ProfileStack.Screen name="Profile" component={Profile}
          options={{
          title: 'Territories',
          headerLeft: () => (
            <Icon.Button name="bars" size={25} backgroundColor='#E94F46'
              onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
    </ProfileStack.Navigator>
  )