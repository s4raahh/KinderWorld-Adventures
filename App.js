import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainPage from './screen/MainPage';
import UsernamePage from './screen/UsernamePage';
import Homepage from './screen/Homepage';
import Leaderboard from './screen/Leaderboard';
import ProfilePage from './screen/ProfilePage';
import Setting from './screen/setting';
import VideoScreen from './screen/Video';
import Game from './screen/Game';
import GameAlphabetA from './screen/GameAlphabetA';
import GameAlphabetE from './screen/GameAlphabetE'; 
import GameAlphabetI from './screen/GameAlphabetI'; 
import GameAlphabetO from './screen/GameAlphabetO';
import GameAlphabetU from './screen/GameAlphabetU';
import GameNumber1 from './screen/GameNumber1'; 
import GameNumber2 from './screen/GameNumber2';
import GameNumber3 from './screen/GameNumber3';
import GameNumber4 from './screen/GameNumber4';
import GameAnimalCat from './screen/GameAnimalCat';
import GameAnimalCow from './screen/GameAnimalCow';
import GameAnimalSnake from './screen/GameAnimalSnake';
import VideoNumber from './screen/VideoNumber';
import VideoAnimal from './screen/VideoAnimal';
import CreateProfilePage from './screen/CreateProfilePage';
import UpdateProfilePage from './screen/UpdateProfilePage';
import ViewProfilePage from './screen/ViewProfilePage';
import VideoAlphabet from './screen/VideoAlphabet';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabBarIcon = ({ focused, name }) => {
  return <Ionicons name={name} size={24} color={focused ? '#000' : '#888'} />;
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homepage} options={{ headerShown: false }} />
      <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VideoAlphabet" component={VideoAlphabet} options={{ headerShown: false }} />
      <Stack.Screen name="VideoNumber" component={VideoNumber} options={{ headerShown: false }} />
      <Stack.Screen name="VideoAnimal" component={VideoAnimal} options={{ headerShown: false }} />
      <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
      <Stack.Screen name="GameAlphabetA" component={GameAlphabetA} options={{ headerShown: false }} />
      <Stack.Screen name="GameAlphabetE" component={GameAlphabetE} options={{ headerShown: false }} />
      <Stack.Screen name="GameAlphabetI" component={GameAlphabetI} options={{ headerShown: false }} />
      <Stack.Screen name="GameAlphabetO" component={GameAlphabetO} options={{ headerShown: false}} />
      <Stack.Screen name="GameAlphabetU" component={GameAlphabetU} options={{ headerShown: false}} />
      <Stack.Screen name="GameNumber1" component={GameNumber1} options={{ headerShown: false }} />
      <Stack.Screen name="GameNumber2" component={GameNumber2} options={{ headerShown: false }} />
      <Stack.Screen name="GameNumber3" component={GameNumber3} options={{ headerShown: false }} />
      <Stack.Screen name="GameNumber4" component={GameNumber4} options={{ headerShown: false }} />
      <Stack.Screen name="GameAnimalCat" component={GameAnimalCat} options={{ headerShown: false }} />
      <Stack.Screen name="GameAnimalCow" component={GameAnimalCow} options={{ headerShown: false }} />
      <Stack.Screen name="GameAnimalSnake" component={GameAnimalSnake} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const ProfilePageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }} />
      <Stack.Screen name="CreateProfile" component={CreateProfilePage} options={{ headerShown: false }} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfilePage} options={{ headerShown: false }} />
      <Stack.Screen name="ViewProfile" component={ViewProfilePage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#EDBE00',
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Profile':
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              break;
            case 'HomeStack':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Leaderboard':
              iconName = focused ? 'trophy' : 'trophy-outline';
              break;
            case 'Setting':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'ellipse';
          }

          return <TabBarIcon focused={focused} name={iconName} />;
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfilePageStack} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
      <Stack.Screen name="UsernamePage" component={UsernamePage} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Video" component={VideoScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VideoAlphabet" component={VideoAlphabet} options={{ headerShown: false }} />
      <Stack.Screen name="VideoNumber" component={VideoNumber} options={{ headerShown: false }} />
      <Stack.Screen name="VideoAnimal" component={VideoAnimal} options={{ headerShown: false }} />
      <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
      <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
