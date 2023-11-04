import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoadingScreen from './LoadingScreen';
import LandingScreen from './LandingScreen';
import { CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentlyUploadedScreen from './RecentlyUploadedScreen';
import CameraScreen from './CameraScreen';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const RecentlyUploadedIcon = <Icon name="upload" size={30} color="#000000" />;
const CameraIcon = <Icon name="camera" size={30} color="#000000" />;
const ProfileIcon = <Icon name="profile" size={30} color="#000000" />;

export default function Home({ navigation }) {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen name="RecentlyUploaded" component={RecentlyUploadedScreen} options={{ tabBarIcon: () => RecentlyUploadedIcon }} />
      <Tab.Screen name="Camera" component={CameraScreen} options={{ tabBarIcon: () => CameraIcon }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: () => ProfileIcon }} />
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