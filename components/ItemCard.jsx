import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

export default function ItemCard({card}) {
  return (
    <View
      style={tw`h-25 w-25 bg-teal-500 bg-opacity-30 rounded flex justify-center items-center`}
    >
      <Text style={tw`flex text-center flex-wrap w-19`}>{card}</Text>
    </View>
  );
}
