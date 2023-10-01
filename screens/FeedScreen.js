import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import tw from "twrnc";


export default function FeedScreen({ navigation }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [postedContent, setPostedContent] = useState("");
  const maxImages = 4; // Maximum number of images to display before showing "# others"
  const maxImageHeight = 120; // Maximum height for each image

  // Function to open the image picker
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (!pickerResult.canceled) {
      // Store the selected assets in an array
      setSelectedImages(pickerResult.assets);
    }
  };

  const renderImageGrid = () => {
    const imagesToDisplay = selectedImages.slice(1, maxImages);
    const imageStyle = {
      width: `${100 / maxImages}%`,
      height: maxImageHeight,
    };

    return (
      // Display the images as a grid
      <View style={tw`mt-2 flex flex-row flex-wrap justify-between`}>
        {imagesToDisplay.map((image, index) => (
          // First 3 images
          <Image
            key={index}
            source={{ uri: image.uri }}
            style={[tw``, imageStyle]}
          />
        ))}

        {selectedImages.length > maxImages && (
          <View
            style={[
              tw`mb-2 overflow-hidden`,
              imageStyle,
              { position: "relative" },
            ]}
          >
            <Image
              //Blur filter
              source={{ uri: selectedImages[maxImages].uri }}
              style={tw`w-full h-full`}
              blurRadius={5}
            />
            <View
              style={tw`absolute inset-0 flex justify-center items-center bg-black bg-opacity-40`}
            >
              <Text style={tw`text-white text-base`}>
                +{selectedImages.length - maxImages}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  // Function to handle the posting action
  const handlePost = () => {
    // Check if there's content to post
    if (postedContent.trim() === "") {
      alert("Please enter some content before posting.");
      return;
    }

    console.log("Posted Content:", postedContent);
    console.log("Selected Images:", selectedImages);

    // Clear the content input field and reset selectedImages
    setPostedContent("");
    setSelectedImages([]);
  };

  return (
    <ScrollView style={tw`h-full bg-teal-500`}>
      <View style={tw`px-4 pt-8`}>
        <Text style={tw`text-center text-white text-3xl font-bold mb-4`}>New Post</Text>

        {/* Upload Images */}
        <View style={tw`bg-teal-500`}>
          <TouchableOpacity
            style={tw`rounded p-4 bg-cyan-700`}
            onPress={pickImage}
          >
            <Text style={tw`text-white text-center font-semibold`}>Upload Images</Text>
          </TouchableOpacity>

          {selectedImages.length > 0 && renderImageGrid()}
        </View>

        {/* Input field for content */}
        <TextInput
          style={tw`
            border
            border-teal-300
            rounded-md
            px-4
            py-2
            w-full
            bg-white
            mt-4
          `}
          multiline={true}
          placeholder="Enter your content"
          value={postedContent}
          onChangeText={(text) => setPostedContent(text)}
        />

        {/* Post button */}
        <TouchableOpacity
          style={tw`bg-teal-700 rounded-md py-3 mt-4`}
          onPress={handlePost}
        >
          <Text style={tw`text-white text-center text-xl font-semibold`}>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
