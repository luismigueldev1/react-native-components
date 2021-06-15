import 'react-native-gesture-handler';
import React from 'react';
import {StackNavigator} from './src/navigators/Navigator';
import {ThemeProvider} from './src/context/theme/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
}
