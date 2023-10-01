import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";
import DownloadButton from "../components/DownloadButton";
import ShareButton from "../components/ShareButton";


const postsData = [
  {
    id: 1,
    imageUrl: require("../assets/5.jpg"),
    message: "This is the first image message.",
  },
  {
    id: 2,
    imageUrl: require("../assets/5.jpg"),
    message: "This is the second image message.",
  },
  {
    id: 3,
    imageUrl: require("../assets/5.jpg"),
    message: "This is the third image message.",
  },
  {
    id: 4,
    imageUrl: require("../assets/5.jpg"),
    message: "This is the fourth image message.",
  },
];

const handleDownload = (postId) => {

}

const handleShare = (postId) => {
  
}

export default function TeacherHomeScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState("");

  // Function to handle opening an enlarged view of the image
  const openImage = (imageUrl, message) => {
    setSelectedImage(imageUrl);
    setSelectedMessage(message);
    setModalVisible(true);
  };

  // Close the opened image
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedMessage("");
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView style={tw`flex-1 bg-gray-200 p-4`}>
        <View style={tw`mb-4`}>
          {postsData.map((post) => (
            <View key={post.id} style={tw`bg-white mb-4 rounded-lg shadow-md`}>
              <TouchableOpacity
                onPress={() => openImage(post.imageUrl, post.message)}
                style={tw`overflow-hidden rounded-t-lg`}
              >
                <Image
                  source={post.imageUrl}
                  style={tw`w-full h-48`}
                  resizeMode="cover"
                />
                <Text style={tw`p-4`}>{post.message}</Text>
              </TouchableOpacity>
              <View style={tw`flex-row justify-between p-4 border-t border-gray-300`}>
                {/* Call the DownloadButton and ShareButton components */}
                <DownloadButton onPress={() => handleDownload(post.id)} />
                <ShareButton onPress={() => handleShare(post.id)} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal for displaying the enlarged image */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={tw`flex-1 bg-black justify-center items-center`}>
          <TouchableOpacity onPress={closeModal} style={tw`absolute top-4 right-4 p-4`}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
          {selectedImage && (
            <>
              <Image
                source={selectedImage}
                style={tw`w-full h-72`}
                resizeMode="contain"
              />
              <Text style={tw`text-white text-base p-4 text-center`}>
                {selectedMessage}
              </Text>
            </>
          )}
        </View>
      </Modal>
    </>
  );
}
