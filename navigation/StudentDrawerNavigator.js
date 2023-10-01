// StudentDrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import StudentHomeScreen from '../screens/StudentHomeScreen';
import StudentProfileScreen from '../screens/StudentProfileScreen';
import FeedScreen from '../screens/FeedScreen';
import SettingScreen from '../screens/SettingScreen';
import SchoolProfileScreen from '../screens/SchoolProfileScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import AcademicYearProgramScreen from '../screens/AcadedmicYearProgramScreen';
import StudentCourseScreen from '../screens/StudentCourseScreen';
import StudentRequestScreen from '../screens/StudentRequestScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <View style={tw`flex-1 bg-cyan-700 gap-2`}>
      <View style={tw`p-4 mb-10`}>
        <Text style={tw`text-3xl font-semibold`}>AICS</Text>
      </View>

      <TouchableOpacity
        style={tw`px-4 py-1 ml-5`}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={tw`text-base text-white`}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`px-4 py-1 ml-5`}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={tw`text-base text-white`}>Profile</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={tw`px-4 py-1 ml-5`}
        onPress={() => navigation.navigate("Feed")}
      >
        <Text style={tw`text-base text-white`}>Feed</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={tw`px-4 py-1 ml-5`}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={tw`text-base text-white`}>Settings</Text>
      </TouchableOpacity>

      <View style={tw`flex-1 justify-end`}>
        {/* School Profile */}
        <TouchableOpacity
          style={tw`px-4 py-1 ml-5`}
          onPress={() => navigation.navigate("School Profile")}
        >
          <Text style={tw`text-sm text-white`}>School Profile</Text>
        </TouchableOpacity>

        {/* AboutUs */}
        <TouchableOpacity
          style={tw`px-4 py-1 ml-5`}
          onPress={() => navigation.navigate("AboutUs")}
        >
          <Text style={tw`text-sm text-white`}>About Us</Text>
        </TouchableOpacity>

        {/* Logo Image */}
        <View style={tw``}>
          <Image
            style={tw`h-15 w-15`}
            source={require("../assets/app-logo.png")}
          />
        </View>

      </View>
    </View>
  );
}

export default function StudentDrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StudentHomeScreen} />
      <Drawer.Screen name="Profile" component={StudentProfileScreen} />
      {/* <Drawer.Screen name="Feed" component={FeedScreen} /> */}
      <Drawer.Screen name="Settings" component={SettingScreen} />
      <Drawer.Screen name="School Profile" component={SchoolProfileScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUsScreen} />

      <Drawer.Screen
        name="AcademicYearProgram"
        component={AcademicYearProgramScreen}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Courses"
        component={StudentCourseScreen}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Requests"
        component={StudentRequestScreen}
        options={{ headerShown: false }}
      />

    </Drawer.Navigator>
  );
}
