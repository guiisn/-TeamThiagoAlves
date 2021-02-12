import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import RegisterPage from './src/pages/RegisterPage';
import DeletePage from './src/pages/DeletePage';
import EditPage from './src/pages/EditPage';
import ListPage from './src/pages/ListPage';
import FinancePage from './src/pages/FinancePage';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Registro" component={RegisterPage} />
          <Stack.Screen name="Remover" component={DeletePage} />
          <Stack.Screen name="Listar" component={ListPage} />
          <Stack.Screen name="Editar" component={EditPage} />
          <Stack.Screen name="Finanças" component={FinancePage} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

