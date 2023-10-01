import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import StudentDrawerNavigator from './StudentDrawerNavigator';
import TeacherDrawerNavigator from './TeacherDrawerNavigator';
// import StudentStackNavigator from './StudentStackNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
    // const userType = 'student';
    
  return (
    <Stack.Navigator initialRouteName="Login">
        
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ headerShown: false }} 
        />

      <Stack.Screen 
        name="Student" 
        component={StudentDrawerNavigator} 
        options={{ headerShown: false }}
        />

      <Stack.Screen 
        name="Teacher" 
        component={TeacherDrawerNavigator}
        options={{ headerShown: false }}
        />

    </Stack.Navigator>
  );
}
