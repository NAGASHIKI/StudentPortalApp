import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";

const ShareButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={tw`flex-row items-center`}
      onPress={onPress}
    >
      <Icon name="share" size={20} style={tw`mr-2`} />
      <Text style={tw`text-base text-gray-600`}>Share</Text>
    </TouchableOpacity>
  );
};

export default ShareButton;
