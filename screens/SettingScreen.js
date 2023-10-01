import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import tw from 'twrnc';
import { logout, isAuthenticated } from '../controllers/LogoutController';


export default function SettingScreen() {
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };

  return (
    <>

      <View style={tw`p-4 flex-1`}>
        <View style={tw`rounded-lg p-4 mb-4 bg-teal-500`}>
          <Text style={tw`text-lg font-semibold`}>General Settings</Text>

          <TouchableOpacity
            onPress={toggleNotifications}
            style={tw`flex-row justify-between items-center mt-2`}
          >
            <Text>Enable Notifications</Text>
            <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleDarkMode}
            style={tw`flex-row justify-between items-center mt-2`}
          >
            <Text>Dark Mode</Text>
            <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
          </TouchableOpacity>
        </View>

        <View style={tw`bg-teal-500 rounded-lg p-4`}>
          <Text style={tw`text-lg font-semibold`}>Account Settings</Text>

          <TouchableOpacity
            style={tw`flex-row justify-between items-center mt-2`}
          >
            <Text>Change Password</Text>
            <Text style={tw`text-gray-500`}>Change</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout} style={tw`flex-row justify-between items-center mt-2`}>
            <Text>Logout</Text>
            <Text style={tw`text-red-500`}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
