import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoadingPage from './loadingPage';

export default function App() {
  return (
    <View style={styles.container}>
    <LoadingPage />
    
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray', 
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});