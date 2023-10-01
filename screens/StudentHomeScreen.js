import React from 'react';
import { View, Text } from 'react-native';
import ItemCard from '../components/ItemCard';
import tw from 'twrnc'

export default function StudentHomeScreen() {
  return (
    <View>
      <View>
        <View style={tw`bg-teal-500`}>
          <ItemCard card="hey" />
        </View>
      </View>
    </View>
  );
}
