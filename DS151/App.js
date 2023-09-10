import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home/Home';
import Counter from './CounterComponent/Counter'
import ColorList from './ColorListComponent/ColorList';
import MediaCalculator from './MediaCalculatorComponent/MediaCalculator'
import Galeria from './GaleriaComponent/Galeria';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MediaCalculator" component={MediaCalculator} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="ColorList" component={ColorList} />
        <Stack.Screen name="Galeria" component={Galeria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
