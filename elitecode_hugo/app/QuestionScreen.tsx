import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import CorrectAnswerFeedback from '../components/CorrectAnswerFeedback';
import IncorrectAnswerFeedback from '../components/IncorrectAnswerFeedback';
import questions from '../constants/question.json';
import ButtonComponent from "../components/ButtonComponent"

const QuestionScreen: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmit = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setModalVisible(true);
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setModalVisible(false);
  };

  const handleContinue = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswer(null);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.questionNumber}>Question {currentQuestion.id}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>{currentQuestion.subQuestion}</Text>
        </View>
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                selectedAnswer === option && styles.selectedOption,
              ]}
              onPress={() => setSelectedAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <ButtonComponent
          title='Submit'
          onPress={handleSubmit}
          buttonColor={[{backgroundColor: "#4E7EC6"}, !selectedAnswer && styles.submitButtonDisabled]}
        />
      </View>

      {isCorrect ? (
        <CorrectAnswerFeedback
          onContinue={handleContinue}
          isVisible={modalVisible}
          hideModal={() => setModalVisible(false)}
        />
      ) : (
        <IncorrectAnswerFeedback
          onRetry={handleRetry}
          isVisible={modalVisible}
          hideModal={() => setModalVisible(false)}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  codeContainer: {
    backgroundColor: '#E8E8E8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 30,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 16,
    color: '#333',
  },
  optionsContainer: {
    marginBottom: 30,
  },
  option: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedOption: {
    borderColor: "#4E7EC6",
    borderWidth: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#B0B0B0',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuestionScreen;
