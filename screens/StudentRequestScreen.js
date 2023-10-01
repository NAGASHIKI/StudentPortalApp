import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
  Image,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ImagePicker from "react-native-image-picker";
import tw from "twrnc";

const requestsData = [
  {
    id: "1",
    studentName: "STEVEN UNIVERSE",
    className: "BA1A",
    CourseName: "Mathematics",
    status: "Pending",
    documentImage: require("../assets/5.jpg"),
    justification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function StudentRequestScreen({ navigation }) {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [isFormModalVisible, setFormModalVisible] = useState(false);
  const [imageUploadModalVisible, setImageUploadModalVisible] = useState(false);
  const [selectedImageForUpload, setSelectedImageForUpload] = useState(null);

  const handleImageUpload = () => {
    // Use ImagePicker to select an image from the gallery or take a photo
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        // Store the selected image
        setSelectedImageForUpload({ uri: response.uri });
      }
    });
  };

  const toggleImageUploadModal = () => {
    setImageUploadModalVisible(!imageUploadModalVisible);
  };

  const [newRequestData, setNewRequestData] = useState({
    CourseName: "",
    studentName: "",
    className: "",
    documentImage: null,
    justification: "",
  });

  const handleRequestChange = (requestId) => {
    setSelectedRequest((prevSelectedRequest) =>
      prevSelectedRequest === requestId ? null : requestId
    );
  };

  const toggleImageModal = () => {
    setImageModalVisible(!imageModalVisible);
  };

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

  const openFormModal = () => {
    setFormModalVisible(true);
  };

  const closeFormModal = () => {
    setFormModalVisible(false);
  };

  const handleSubmitNewRequest = () => {
    const newRequestId = String(requestsData.length + 1);
    const newRequest = {
      id: newRequestId,
      CourseName: newRequestData.CourseName,
      studentName: newRequestData.studentName,
      className: newRequestData.className,
      status: "Pending",
      documentImage: newRequestData.documentImage,
      justification: newRequestData.justification,
    };

    // Update requestsData array with the new request
    requestsData.push(newRequest);

    // Close the form modal and clear the form data
    setFormModalVisible(false);
    setNewRequestData({
      CourseName: "",
      studentName: "",
      className: "",
      images: "",
      documentImage: null,
      justification: "",
    });
  };

  const renderRequest = (request) => {
    const isExpanded = selectedRequest === request.id;

    return (
      <View key={request.id} style={tw`bg-teal-300 p-2 rounded-md mb-2`}>
        <TouchableOpacity onPress={() => handleRequestChange(request.id)}>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-white`}>{request.CourseName}</Text>
            <AntDesign
              name={isExpanded ? "upcircle" : "downcircle"}
              size={24}
              color="white"
            />
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={tw`bg-gray-300 p-2 rounded-md mt-2`}>
            <Text>{`Student: ${request.studentName}`}</Text>
            <Text>{`Class: ${request.className}`}</Text>
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
            {request.status === "Pending" && (
              <View style={tw`mt-2`}>
                <Button title="Pending..." onPress={() => {}} color="#FFD700" />
                {/* <Button title="Rejected" onPress={() => {}} color="#FF3B30" />
                <Button title="Approved" onPress={() => {}} color="#007BFF" /> */}
              </View>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={tw`flex-1 p-4 bg-teal-500`}>
      <View style={tw`flex-row items-center mb-4`}>
        {/* Back button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={tw`p-2`}
        >
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
              <Image source={selectedImage} style={tw`w-full h-300`} />
            </>
          )}
        </View>
      </Modal>
      {/* New Request button */}
      <TouchableOpacity
        onPress={openFormModal}
        style={tw`bg-white p-2 rounded-md mt-4 items-center`}
      >
        <Text style={tw`text-teal-500 text-lg`}>New Request</Text>
      </TouchableOpacity>
      {/* Modal for new request form */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={isFormModalVisible}
        onRequestClose={closeFormModal}
      >
        <View style={tw`flex-1 justify-center items-center bg-teal-500 p-4`}>
          <Text style={tw`text-white text-2xl mb-4`}>New Request</Text>
          <TextInput
            style={tw`bg-white p-2 rounded-md w-full mb-2`}
            placeholder="Course Name"
            value={newRequestData.CourseName}
            onChangeText={(text) =>
              setNewRequestData({ ...newRequestData, CourseName: text })
            }
          />
          <TextInput
            style={tw`bg-white p-2 rounded-md w-full mb-2`}
            placeholder="Student Name"
            value={newRequestData.studentName}
            onChangeText={(text) =>
              setNewRequestData({ ...newRequestData, studentName: text })
            }
          />
          <TextInput
            style={tw`bg-white p-2 rounded-md w-full mb-2`}
            placeholder="Class Name"
            value={newRequestData.className}
            onChangeText={(text) =>
              setNewRequestData({ ...newRequestData, className: text })
            }
          />

          {/* Button to open image upload modal */}
          <TouchableOpacity
            onPress={toggleImageUploadModal}
            style={tw`bg-white p-2 w-full rounded-md mb-2 items-center`}
          >
            <Text style={tw`text-teal-500 text-lg`}>Upload Image</Text>
          </TouchableOpacity>

          <TextInput
            style={tw`bg-white p-2 rounded-md w-full mb-2`}
            placeholder="Justification"
            multiline
            numberOfLines={4}
            value={newRequestData.justification}
            onChangeText={(text) =>
              setNewRequestData({ ...newRequestData, justification: text })
            }
          />
          <TouchableOpacity
            onPress={handleSubmitNewRequest}
            style={tw`bg-teal-500 p-2 rounded-md items-center`}
          >
            <Text style={tw`text-white`}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={closeFormModal}
            style={tw`bg-white p-2 rounded-md mt-2 items-center`}
          >
            <Text style={tw`text-teal-500`}>Cancel</Text>
          </TouchableOpacity>

          {/* Modal for image upload */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={imageUploadModalVisible}
            onRequestClose={toggleImageUploadModal}
          >
            <View
              style={tw`flex-1 justify-center items-center bg-teal-500 p-4`}
            >
              <Text style={tw`text-white text-2xl mb-4`}>Upload Image</Text>
              {selectedImageForUpload && (
                <Image
                  source={selectedImageForUpload}
                  style={tw`w-64 h-64 mb-4`}
                />
              )}
              <TouchableOpacity
                onPress={handleImageUpload}
                style={tw`bg-teal-500 p-2 rounded-md items-center mb-4`}
              >
                <Text style={tw`text-white`}>Select Image</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleImageUploadModal}
                style={tw`bg-white p-2 rounded-md items-center`}
              >
                <Text style={tw`text-teal-500`}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </Modal>
    </View>
  );
}
