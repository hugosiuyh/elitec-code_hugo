import React from 'react';
import { StyleSheet } from 'react-native';
import ModalComponent from './ModalComponent';
import ButtonComponent from './ButtonComponent';
import ConfettiAnimation from './ConfettiAnimation'; // Import the confetti animation

interface Props {
  onContinue: () => void;
  isVisible: boolean;
  hideModal: () => void;
}

const CorrectAnswerFeedback: React.FC<Props> = ({ onContinue, isVisible, hideModal }) => {
  return (
    <ModalComponent
      isVisible={isVisible}
      hideModal={hideModal}
      title="Congratulations! You earned the Expert badge"
      content=""
      backgroundColor="#EDF9F5" // Green background for correct
      animationOut="fadeOut"
      titleStyle= {{ fontSize: 40, color:"#88C796" }}
      contentStyle = {{ fontSize: 14, color:"#313131" }}
      buttonColor = {{backgroundColor:  '#88C796'}}
      buttonText = 'Continue'
      onPress={() => {
        console.log('onContinue triggered');
        onContinue(); // Ensure this is triggered
      }} // Correctly pass the onContinue handler
    >
    <ConfettiAnimation />
    </ ModalComponent >
  );
};

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  continueButtonText: {
    color: '#4CAF50',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CorrectAnswerFeedback;
