import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoadingPage from './loadingPage';
import LoginPage from './loginPage';
import { CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentlyUploaded from './RecentlyUploaded';
import CameraPage from './CameraPage';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const RecentlyUploadedIcon = <Icon name="upload" size={30} color="#000000" />;
const CameraIcon = <Icon name="camera" size={30} color="#000000" />;
const ProfileIcon = <Icon name="profile" size={30} color="#000000" />;


export default function Home({ navigation }) {

  return (

    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="RecentlyUploaded" component={RecentlyUploaded} options={{ tabBarIcon: () => RecentlyUploadedIcon }} />
      <Tab.Screen name="Camera" component={CameraPage} options={{ tabBarIcon: () => CameraIcon }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => ProfileIcon }} />
    </Tab.Navigator>


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