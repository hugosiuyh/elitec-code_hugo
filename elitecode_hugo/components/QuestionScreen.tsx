import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CorrectAnswerFeedback from './CorrectAnswerFeedback';
import IncorrectAnswerFeedback from './IncorrectAnswerFeedback';

const QuestionScreen: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const question = "What's the output of the following code?\nconsole.log(1 + \"2\" + \"2\");";
  const options: string[] = ["122", "32", "14", "NaN"];
  const correctAnswer = "122";

  const handleSubmit = () => {
    if (selectedAnswer === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowFeedback(true);
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedAnswer === option && styles.selectedOption,
          ]}
          onPress={() => setSelectedAnswer(option)}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      {showFeedback && (
        isCorrect ? (
          <CorrectAnswerFeedback />
        ) : (
          <IncorrectAnswerFeedback onRetry={handleRetry} />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#e0e0e0',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default QuestionScreen;