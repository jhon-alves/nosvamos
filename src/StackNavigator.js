import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Rotas
import MainScreen from './screens/Main';
import LoginScreen from './screens/Login';
import CadastroRespScreen from './screens/CadastroResp';
import CadastroDefScreen from './screens/CadastroResp/CadastroDef';
import HomeScreen from './screens/Home';
import TrajetosScreen from './screens/Trajetos';
import AcompanheScreen from './screens/Acompanhe';
import PerfilScreen from './screens/Perfil';
import CadastroTrajetoScreen from './screens/CadastroTrajeto';
import EditPerfilScreen from './screens/EditPerfil';

const Stack = createStackNavigator();

const HeaderBar = {
  headerStyle: {
    backgroundColor: '#9d1c65',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}


const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ HeaderBar } options ={{tabBarVisible: false}}>
      <Stack.Screen
        name="Main"
        component={ MainScreen }
        options={{ headerShown: false }}
        
        
        
      />
      <Stack.Screen
        name="Login"
        component={ LoginScreen }
        options={{ title: '', tabBarVisible: false}}
      />

      <Stack.Screen
        name="CadastroResp"
        component={ CadastroRespScreen }
        options={{ title: ''}}
      />

      <Stack.Screen
        name="CadastroDef"
        component={ CadastroDefScreen }
        options={{ title: ''}}
      />
    </Stack.Navigator>
  )
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ HeaderBar }>
      <Stack.Screen
        name="Home"
        component={ HomeScreen }
        options={{ title: 'Bem Vindo' }}
      />
    </Stack.Navigator>
  );
};
const TrajetosStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ HeaderBar }>
      <Stack.Screen
        name="Trajetos"
        component={ TrajetosScreen }
      />
      <Stack.Screen
        name="CadastroTrajeto"
        component={ CadastroTrajetoScreen }
        options={{ title: "Adicionar Trajeto" }}
      />
    </Stack.Navigator>
  );
};
const AcompanheStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ HeaderBar }>
      <Stack.Screen
        name="Acompanhe"
        component={AcompanheScreen}
      />
    </Stack.Navigator>
  );
};
const PerfilStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ HeaderBar }>
      <Stack.Screen
        name="Perfil"
        component={ PerfilScreen }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditPerfil"
        component={ EditPerfilScreen }
        options={{ title: "Editar Perfil" }}
      />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  HomeStackNavigator,
  TrajetosStackNavigator,
  AcompanheStackNavigator,
  PerfilStackNavigator
};