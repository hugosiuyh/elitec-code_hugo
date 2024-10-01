import React from 'react';
import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import ButtonComponent from './ButtonComponent';

interface Props {
  isVisible: boolean;
  hideModal: () => void;
  title: string;
  content: string;
  backgroundColor: string;
  animationIn: string;
  animationOut: string;
  onPress: () => void; // Function to handle button press (e.g., onRetry, onContinue)
  titleStyle?: TextStyle; // Customizable title style
  contentStyle?: TextStyle; // Customizable content style
  buttonStyle?: ViewStyle; // Customizable button style
  buttonTextStyle?: TextStyle; // Customizable button text style
  buttonText: string; // Button text
  buttonColor: ViewStyle;
  children?: React.ReactNode;
}

const ModalComponent: React.FC<Props> = ({
  isVisible,
  hideModal,
  title,
  content,
  backgroundColor,
  animationIn,
  animationOut,
  onPress,
  titleStyle,
  contentStyle,
  buttonColor, 
  buttonText,
  children,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      backdropOpacity={0.5}
      animationIn={animationIn}
      animationOut={animationOut}
      useNativeDriver
      style={styles.modal} // Full-screen modal style
    >
      <Animatable.View animation={animationIn} style={[styles.modalContent, { backgroundColor }]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.content, contentStyle]}>{content}</Text>
        {children}
        
        {/* Use ButtonComponent and pass the onPress handler */}
        <ButtonComponent
          title={buttonText}
          onPress={onPress}
          buttonColor={buttonColor}
        />
      </Animatable.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    margin: 0, // Full screen without margins
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 0, // No rounded corners to fill the screen
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
});

export default ModalComponent;
