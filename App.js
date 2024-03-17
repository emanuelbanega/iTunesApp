import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeView from './src/views/HomeView';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetalleMusicaView from './src/views/DetalleMusicaView';
import MusicFavourite from './src/views/MusicFavourite';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Detalle"
          component={DetalleMusicaView}
          options={{ title: 'Detalle' }}
        />
        <Stack.Screen
          name="Favourite"
          component={MusicFavourite}
          options={{ title: 'Favoritos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
