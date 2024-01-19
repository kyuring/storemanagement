import { MD3LightTheme, useTheme } from 'react-native-paper';

const theme = {
    ...MD3LightTheme, // or MD3DarkTheme
    roundness: 2,
    myOwnProperty : true,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#0B3679',
      secondary: '#1E6EE9',
      tertiary: '#F6CA4D',
      fourth : '#848484',
      backGray : '#E6E6E6'
    },
  };

  export default theme;