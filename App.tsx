import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Navigation from './app/navigation/Navigation';
import { NativeWindStyleSheet } from "nativewind";

export default function App() {
  return (
    <>
    <SafeAreaProvider>
      <SafeAreaView />
      <Navigation />
      
    </SafeAreaProvider>
    <StatusBar style='light'/>
    </>
  );
}
