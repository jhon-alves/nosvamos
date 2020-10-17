import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CadastroIdaScreen from './CadastroIda';
import CadastroVoltaScreen from './CadastroVolta';

const Tab = createMaterialTopTabNavigator();

export default function CadastroTrajetoScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="CadastroIda"
        component={CadastroIdaScreen}
        options={{ title: 'Ida' }}
      />
      <Tab.Screen
        name="CadastroVolta"
        component={CadastroVoltaScreen}
        options={{ title: 'Volta' }}
      />
    </Tab.Navigator>
  );
}

