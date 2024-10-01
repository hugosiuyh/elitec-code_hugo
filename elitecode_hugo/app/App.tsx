import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import QuestionScreen from './QuestionScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <QuestionScreen />
    </SafeAreaView>
  );
}