
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/login/login.jsx';
import Cadastro from './src/cadastro/cadastro.jsx';
import Modal from './components/modal/modal.jsx';
import EventCard from './components/evento/EventCard.jsx';  

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen 
          name="Modal" 
          component={Modal} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="EventList"
          component={EventCard}  
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;