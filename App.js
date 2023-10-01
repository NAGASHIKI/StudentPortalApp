import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import tw from 'twrnc';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={tw`flex-1`}>
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}
