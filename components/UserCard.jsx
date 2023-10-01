import React from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";

export default function UserCard({ matricule, name }) {
  return (
    <>
      <View
        style={tw`flex flex-row justify-between rounded w-full mt-5 p-1 bg-teal-500 bg-opacity-50`}
      >
        {/* User Image and Matricule */}
        <View style={tw`p-1`}>
          <View style={tw``}>
            <Image
              style={tw`bg-white rounded h-25 w-25`}
              source={require("../assets/app-logo.png")}
            />

            <View>
              <Text style={tw`text-center mt-2`}>{matricule}</Text>
            </View>
          </View>
        </View>

        {/* Name and badge */}
        <View style={tw`p-1 flex justify-between`}>
          <View>
            <Text
              style={tw`text-base w-60 flex-wrap flex justify-end text-right`}
              multiline={true}
            >
              {name}
            </Text>
          </View>

          <View style={tw``}>
            <TouchableOpacity style={tw`bg-cyan-900 rounded p-1`}>
              <Text style={tw`text-center text-white`}>Electronic Badge</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
