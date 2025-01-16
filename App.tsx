import './gesture-handler'
import { ThemeProvider } from 'styled-components';
import theme from './src/themes'
import { StatusBar } from 'react-native';
import { AuthProvider } from '@context/auth';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '@routes/index.routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <AuthProvider>
            <Routes/>
          </AuthProvider>
        </NavigationContainer>
    </ThemeProvider>
  );
}

