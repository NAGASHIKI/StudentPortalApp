import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';

const coursesData = [
  {
    id: '1',
    name: 'Mathematics',
    caMark: '80',
    examMark: '90',
  },
  {
    id: '2',
    name: 'Computer Security',
    caMark: '75',
    examMark: '85',
  },
  {
    id: '3',
    name: 'English',
    caMark: '88',
    examMark: '92',
  },
  {
    id: '4',
    name: 'English',
    caMark: '88',
    examMark: '92',
  },
  {
    id: '5',
    name: 'English',
    caMark: '88',
    examMark: '92',
  },
];

export default function TeacherCourseScreen({ navigation }) {
  return (
    <View style={tw`flex-1 p-4 bg-teal-500`}>
      <View style={tw`flex-row items-center mb-4`}>

        {/* Back button */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={tw`p-2`}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>

        <Text style={tw`text-2xl text-white ml-4`}>Courses</Text>
      </View>

      <Text style={tw`text-lg font-semibold text-white mb-2`}>Course Details</Text>
      <FlatList
        data={coursesData}
        renderItem={({ item }) => (

          <View style={tw`bg-teal-300 p-2 rounded-md mb-2`}>

            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-white text-xl`}>{item.name}</Text>
              <TouchableOpacity style={tw`p-2`}>
                <AntDesign name="edit" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={tw`bg-white p-2 rounded-md mt-2`}>
              <Text>CA: {item.caMark}</Text>
              <Text>EXAM: {item.examMark}</Text>
            </View>

          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
