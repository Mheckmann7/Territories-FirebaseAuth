import React, { useContext, useState, useEffect, Text, View } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from '../screens/Drawer';

import HomeScreen from '../screens/HomeScreen';


const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
      
      )
};

export default AppStack; 