import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';


const subjectsData = [
  {
    id: '1',
    name: 'Mathematics',
    details: 'details heeeeeeeeeeeeeeeeeeere...',
    programs: ['Program A', 'Program B'],
  },
  {
    id: '2',
    name: 'Computer Security',
    details: 'details heeeeeeeeeeeeeeeeeeere...',
    programs: ['Program C', 'Program D'],
  },
  {
    id: '3',
    name: 'ICT Law',
    details: 'details heeeeeeeeeeeeeeeeeeere...',
    programs: ['Program E', 'Program F'],
  },
];

export default function AcademicYearProgramScreen({ navigation }) {
  const [expandedSubjects, setExpandedSubjects] = useState([]);

  const toggleSubjectExpansion = (subjectId) => {
    if (expandedSubjects.includes(subjectId)) {
      setExpandedSubjects(expandedSubjects.filter((id) => id !== subjectId));
    } else {
      setExpandedSubjects([...expandedSubjects, subjectId]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleSubjectExpansion(item.id)}>
      <View style={tw`bg-teal-300 p-2 rounded-md mb-2`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-white`}>{item.name}</Text>
          <AntDesign
            name={expandedSubjects.includes(item.id) ? 'upcircle' : 'downcircle'}
            size={24}
            color="white"
          />
        </View>
        {expandedSubjects.includes(item.id) && (
          <View style={tw`bg-white p-2 rounded-md mt-2`}>
            <Text>{item.details}</Text>
            <Text style={tw`mt-2 text-lg font-semibold`}>Programs</Text>
            {item.programs.map((program, index) => (
              <Text key={index} style={tw`text-gray-800`}>
                - {program}
              </Text>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={tw`flex-1 p-4 bg-teal-500`}>
      <View style={tw`flex-row items-center mb-4`}>

        {/* Back button */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={tw`p-2`}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>

        <Text style={tw`text-2xl text-white ml-4`}>Academic Year Program</Text>
      </View>

      <Text style={tw`text-lg font-semibold text-white mb-2`}>Courses</Text>
      <FlatList
        data={subjectsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
