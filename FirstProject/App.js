import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Navigate from './screens/Navigate';
import ShowTodos from './screens/ShowTodos';
import List from './screens/List';
import Data from './screens/Data';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'}/>
    <NavigationContainer>
    <Tab.Navigator screenOptions={({route}) => ({
      headerTitleAlign:'center',
      headerTintColor:'#cccccc',
      headerShadowVisible:false,
      tabBarStyle:{
        backgroundColor:'#151515',
      },
      headerStyle:{
        backgroundColor:'#151515',
      },
      tabBarIcon:({focused, color, size}) =>{
        let iconName;
        let rn = route.name;

        if (rn === 'StartScreen'){
          iconName = focused ? 'home' : 'home-outline';
        } else if (rn === 'HomeScreen'){
          iconName = focused ? 'add-outline' : 'add-outline';
        } else if (rn === 'OutputScreen'){
          iconName = focused ? 'menu-outline' : 'document-text-outline';
        } else if (rn === 'ListScreen'){
          iconName = focused ? 'list' : 'list-outline';
        } else if (rn === 'RandomData'){
          iconName = focused ? 'clipboard-outline' : 'documents-outline';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="StartScreen" component={Navigate}  />
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="OutputScreen" component={ShowTodos} />
      <Tab.Screen name="ListScreen" component={List} />
      <Tab.Screen name="RandomData" component={Data} options={{
        headerShadowVisible:false}} />
    </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;

