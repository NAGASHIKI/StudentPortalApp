import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can save the dark mode state in AsyncStorage or some state management system
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? 'black' : 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: isDarkMode ? 'white' : 'black',
      fontSize: 24,
    },
  });

  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Dark Mode: {isDarkMode ? 'On' : 'Off'}</Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}
