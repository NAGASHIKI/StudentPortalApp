import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { SimpleLineIcons } from "react-native-vector-icons";
import tw from "twrnc";
import login from "../controllers/LoginController"; // Import the controller
import ErrorModal from "../components/ErrorModal";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleLogin = async () => {
    try {
      await login(username, password, navigation); // Use the controller
      if (login) {
        setModalMessage("Login succesfull");

        // Show the modal
        openModal();
      }
    } catch (error) {
      setModalMessage(error.message);
      // Show the modal with the error message
      openModal();
    }
  };
  return (
    <>
      <View style={tw`h-full items-center justify-center bg-teal-500`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Welcome!</Text>

        {usernameError ? (
          <Text style={tw`text-red-500`}>{usernameError}</Text>
        ) : null}

        <View style={tw`mb-4`}>
          <TextInput
            style={tw`border border-teal-300 rounded px-3 py-2 w-64 bg-teal-500`}
            placeholder="Enter your matricule"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        {passwordError ? (
          <Text style={tw`text-red-500`}>{passwordError}</Text>
        ) : null}
        <View style={tw`mb-4`}>
          <TextInput
            style={tw`border border-teal-300 rounded px-3 py-2 w-64 bg-teal-500`}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={tw`flex-col justify-between`}>
          <TouchableOpacity
            style={tw`items-start bg-blue-500 px-5 py-2 w-64 rounded text-white bg-cyan-700`}
            onPress={handleLogin}
          >
            <Text style={tw`text-white text-base m-auto`}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for displaying a success message */}
      <ErrorModal
        isVisible={isModalVisible}
        message={modalMessage}
        onClose={closeModal}
      />
    </>
  );
}
