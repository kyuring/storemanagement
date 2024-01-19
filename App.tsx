import * as React from 'react';
import { PaperProvider, MD3LightTheme, useTheme } from 'react-native-paper';
import theme from './assets/theme';
import MainScreen from './screen/mainscreen';
import LoginScreen from './screen/loginscreen';


export default function App() {
  return (
      <>
        <PaperProvider theme={theme}>
          <MainScreen />
        </PaperProvider>
      </>
  );
}
