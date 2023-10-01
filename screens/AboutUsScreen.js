import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import tw from 'twrnc';

export default function AboutUsScreen() {
  const teamMembers = [
    {
      name: 'Lord Aymar',
      role: 'CO-Founder & CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ligula eu elit auctor pellentesque.',
      source: require('../assets/app-logo.png'),
    },
    {
      name: 'Lord Simon',
      role: 'CO-Founder & CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ligula eu elit auctor pellentesque.',
      source: require('../assets/app-logo.png'),
    },
  ];

  return (
    <ScrollView style={tw`bg-teal-500 p-4`}>
      <View style={tw`py-8 px-4`}>
        <Text style={tw`text-4xl font-bold mb-4 text-white`}>About Our Enterprise</Text>
        <Text style={tw`text-lg text-white mb-6`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus lacinia metus, sit amet luctus nunc facilisis nec. Duis in ultricies purus.
        </Text>

        <Text style={tw`text-4xl font-bold mb-4 text-white`}>Our Mission</Text>
        <Text style={tw`text-lg text-white mb-6`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ligula eu elit auctor pellentesque.
        </Text>

        <Text style={tw`text-4xl font-bold mb-4 text-white`}>Our Team</Text>
        {teamMembers.map((member, index) => (
          <View key={index} style={tw`flex items-center mb-8`}>
            <Image source={member.source} style={tw`w-32 h-32 rounded-full mb-2`} />
            <View style={tw`ml-4`}>
              <Text style={tw`text-2xl font-semibold text-white`}>{member.name}</Text>
              <Text style={tw`text-lg text-white mb-2`}>{member.role}</Text>
              <Text style={tw`text-base text-white`}>{member.bio}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
