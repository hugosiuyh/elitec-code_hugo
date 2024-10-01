import React from 'react';
import { StyleSheet } from 'react-native';
import ModalComponent from './ModalComponent';
import ButtonComponent from './ButtonComponent';

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
      backgroundColor="#F9EDEE"
      titleStyle= {{ fontSize: 40, color:"#C78897" }}
      contentStyle = {{ fontSize: 14, color:"#313131" }}
      buttonColor = {{backgroundColor:  "#C78897"}}
      buttonText = "Try Again"
      onPress={onRetry}
      animationIn="tada"
      animationOut="fadeOut"
    />
  );
};

const styles = StyleSheet.create({
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
});

export default IncorrectAnswerFeedback;
