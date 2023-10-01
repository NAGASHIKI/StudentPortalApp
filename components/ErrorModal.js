import React, { useEffect } from 'react';
import { View, Text, Modal } from 'react-native';
import tw from 'twrnc';

export default function ErrorModal({ isVisible, message, onClose }) {
  useEffect(() => {
    if (isVisible) {
      // Automatically close the modal after 2 seconds
      const timer = setTimeout(() => {
        onClose(); // Call the onClose function to close the modal
      }, 2000);

      // Clear the timer if the modal is closed before the timeout
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
    >
      <View
        style={tw`
          flex-row-reverse
          justify-center
          items-center
          bg-teal-700
          absolute
          top-2
          right-1
          h-auto
          w-45
          rounded-2
        `}
      >
        <Text style={tw`text-white p-4 text-lime-500`}>{message}</Text>
      </View>
    </Modal>
  );
}
