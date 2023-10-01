import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import UserCard from '../components/UserCard';
import ItemCard from '../components/ItemCard';

export default function StudentProfileScreen() {
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
        <View style={tw`mt-15 flex p-4`}>
          <Text style={tw`mb-5 text-base`}>Academics</Text>

          <ScrollView contentContainerStyle={tw`flex-wrap flex-row gap-5`}>
            <TouchableOpacity
              containerStyle= {tw`bg-teal-700 rounded`} 
              onPress={() => navigateToScreen('ReportCard')}>
              <ItemCard card="REPORT CARD" />
            </TouchableOpacity>

            <TouchableOpacity
              containerStyle= {tw`bg-teal-700 rounded`} 
              onPress={() => navigateToScreen('Courses')}>
              <ItemCard card="COURSES" />
            </TouchableOpacity>

            <TouchableOpacity
              containerStyle= {tw`bg-teal-700 rounded`} 
              onPress={() => navigateToScreen('Requests')}>
              <ItemCard card="REQUESTS" />
            </TouchableOpacity>

            <TouchableOpacity
              containerStyle= {tw`bg-teal-700 rounded`} 
              onPress={() => navigateToScreen('AcademicYearProgram')}>
              <ItemCard card="ACADEMIC YEAR PROGRAM" />
            </TouchableOpacity>

            <TouchableOpacity
              containerStyle= {tw`bg-teal-700 rounded`} 
              onPress={() => navigateToScreen('FinalResults')}>
              <ItemCard card="FINAL RESULTS" />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
