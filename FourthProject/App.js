import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Test from './screens/Test';
import GetData from './screens/GetData';
import TestData from './screens/TestData';
import OutputData from './screens/OutputData';
import OTPScreen from './screens/OTPScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign:'center',
        headerShadowVisible:false,
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="GetData" component={GetData} />
        <Stack.Screen name="TestData" component={TestData} />
        <Stack.Screen name="OutputScreen" component={OutputData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
