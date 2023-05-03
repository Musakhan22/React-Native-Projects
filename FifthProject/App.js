import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EnterPhone from './screens/EnterPhone';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitleAlign:'center',
          headerShadowVisible:false,
          headerShown:true,
          headerStyle:{backgroundColor:'#ffffff'},
        }}>
          <Stack.Screen name="EnterPhone" component={EnterPhone} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
