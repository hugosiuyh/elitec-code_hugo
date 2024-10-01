import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Props {
  onPress: () => void;
  title: string;
  buttonColor?: ViewStyle;
}


const ButtonComponent: React.FC<Props> = ({ onPress, title, buttonColor}) => {
  return (
    

    <TouchableOpacity style={[styles.button,buttonColor]}       
      onPress={() => {
        console.log('Button Pressed'); // Add this to ensure onPress is firing
        onPress(); // Ensure that this is correctly invoking the passed function
      }}>
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF5254',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
