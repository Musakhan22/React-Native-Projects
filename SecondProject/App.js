import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './screens/Home';
import Forgot from './screens/Forgot';
import Reset from './screens/Reset';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{
          headerShadowVisible:false,
          headerTitleAlign:'center',
          headerTransparent:true,
          headerTintColor:'#cccccc',
          headerStyle:{
            backgroundColor:'#0e0e0e',
          },
        }}>
        <Stack.Screen name={'Home'} component={Home}/>
        <Stack.Screen name={'ForgotPassword'} component={Forgot} />
        <Stack.Screen name={'ResetPassword'} component={Reset}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
