import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import UserCard from '../components/UserCard';
import ItemCard from '../components/ItemCard';

export default function TeacherProfileScreen() {
  const navigation = useNavigation();

  // Function to navigate to the corresponding screen
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <>
      <View style={tw`flex-1 p-4`}>
        {/* UserCard */}
        <UserCard
          name="KIM KIMOJI KOKOF RUDOLF ALFRED II"
          matricule="57g11d3224"
        />

        {/* Academics and cards */}
        <View style={tw`mt-15 flex p-4 bg-white bg-opacity-90`}>
          <Text style={tw`mb-5 text-base`}>Academics</Text>

          <ScrollView contentContainerStyle={tw`flex-wrap flex-row gap-5`}>

            <TouchableOpacity onPress={() => navigateToScreen('Courses')}>
              <ItemCard card="COURSES" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateToScreen('Requests')}>
              <ItemCard card="REQUESTS" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateToScreen('AcademicYearProgram')}>
              <ItemCard card="ACADEMIC YEAR PROGRAM" />
            </TouchableOpacity>

          </ScrollView>
        </View>
      </View>
    </>
  );
}
