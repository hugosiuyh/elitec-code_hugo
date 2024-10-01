import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';

interface Props {
  isVisible: boolean;
  hideModal: () => void;
  title: string;
  content: string;
  backgroundColor: string;
  animationIn: string;
  animationOut: string;
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
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        {children}
        <TouchableOpacity style={styles.closeButton} onPress={hideModal}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FF5252',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ModalComponent;
