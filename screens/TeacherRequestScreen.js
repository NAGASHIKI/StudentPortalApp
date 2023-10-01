import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";

const requestsData = [
  {
    id: "1",
    studentName: "STEVEN UNIVERSE",
    className: "BA1A",
    CourseName: "Mathematics",
    documentImage: require("../assets/app-logo.png"),
    justification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    studentName: "ROYCE STANFORD",
    className: "BA2A",
    CourseName: "Mathematics",
    documentImage: require("../assets/5.jpg"),
    justification:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function TeacherRequestScreen({ navigation }) {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState("");

  const handleRequestChange = (requestId) => {
    setSelectedRequest((prevSelectedRequest) =>
      prevSelectedRequest === requestId ? null : requestId
    );
  };

  const toggleImageModal = () => {
    setImageModalVisible(!imageModalVisible);
  };

  // Function to handle opening an enlarged view of the image
  const openImage = (imageUrl, message) => {
    setSelectedImage(imageUrl);
    setSelectedMessage(message);
    setImageModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedMessage("");
    setImageModalVisible(false);
  };

  const renderRequest = (request) => {
    const isExpanded = selectedRequest === request.id;

    return (
      <View key={request.id} style={tw`bg-teal-300 p-2 rounded-md mb-2`}>
        <TouchableOpacity onPress={() => handleRequestChange(request.id)}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-white`}>{request.studentName}</Text>
            <AntDesign
              name={isExpanded ? "upcircle" : "downcircle"}
              size={24}
              color="white"
            />
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={tw`bg-white p-2 rounded-md mt-2`}>
            <Text>{`Class: ${request.className}`}</Text>
            <Text>{`Course: ${request.CourseName}`}</Text>
            <TouchableOpacity
              onPress={() =>
                openImage(request.documentImage, request.justification)
              }
            >
              <Image
                source={request.documentImage}
                style={tw`mt-2 w-full h-50`}
              />
            </TouchableOpacity>
            <Text
              style={tw`mt-2`}
            >{`Justification: ${request.justification}`}</Text>
            <View style={tw`flex-row mt-2 justify-between`}>
              <Button title="Accept" onPress={() => {}} color="#007BFF" />
              <Button title="Decline" onPress={() => {}} color="#FF3B30" />
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={tw`flex-1 p-4 bg-teal-500`}>
      <View style={tw`flex-row items-center mb-4`}>
        {/* Back button */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={tw`p-2`}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>

        <Text style={tw`text-2xl text-white ml-4`}>Requests</Text>
      </View>

      <ScrollView>
        {requestsData.map((request) => renderRequest(request))}
      </ScrollView>

      {/* Modal for displaying the enlarged image */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={imageModalVisible}
        onRequestClose={closeModal}
      >
        <View style={tw`flex-1 justify-center items-center bg-black`}>
          <TouchableOpacity
            onPress={closeModal}
            style={tw`absolute top-8 right-8 p-2 z-10`}
          >
            <Text style={tw`text-white text-lg`}>Close</Text>
          </TouchableOpacity>
          {selectedImage && (
            <>
              {/* Image displayed in modal */}
              <Image source={selectedImage} style={tw`w-full h-100`} />
              {/* <Text style={tw`text-white p-4`}>{selectedMessage}</Text> */}
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}
