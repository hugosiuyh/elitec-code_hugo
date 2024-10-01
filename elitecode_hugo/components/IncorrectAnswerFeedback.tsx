import React from 'react';
import ModalComponent from './ModalComponent';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

interface Props {
  onRetry: () => void;
  isVisible: boolean;
  hideModal: () => void;
}

const IncorrectAnswerFeedback: React.FC<Props> = ({ onRetry, isVisible, hideModal }) => {
  return (
    <ModalComponent
      isVisible={isVisible}
      hideModal={hideModal}
      title="Incorrect!"
      content="Hint: Think about how JavaScript handles different data types."
      backgroundColor="#F9EDEE" // Red background for incorrect
      animationIn="tada"
      animationOut="fadeOut"
    >
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>Try Again</Text>
      </TouchableOpacity>
    </ModalComponent>
  );
};

const styles = {
  retryButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  retryButtonText: {
    color: '#FF5252',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default IncorrectAnswerFeedback;
