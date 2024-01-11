import * as React from 'react';
import { PaperProvider, MD3LightTheme, useTheme } from 'react-native-paper';

import MainScreen from './screen/mainscreen';
import LoginScreen from './screen/loginscreen';

const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};
export default function App() {
  return (
      <>
        <PaperProvider theme={theme}>
          <MainScreen />
        </PaperProvider>
      </>
  );
}
