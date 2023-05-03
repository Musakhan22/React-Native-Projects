import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
          elevation:0,
          borderTopWidth:0,
        },
        tabBarIcon:({ focused, color, size}) => {
          let iconName;
          if (route.name === 'Home'){
            iconName = focused ? 'bookmark-outline' : 'bookmark';
          } else if (route.name === 'Login'){
            iconName = focused ? 'log-in-outline' : 'log-in-outline';
          } else if (route.name === 'SignUp'){
            iconName = focused ? 'add-outline' : 'add-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      >
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="SignUp" component={SignUp}/>
        <Tab.Screen name="Home" component={Home}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
