import React from 'react';
import { View, Button } from 'react-native';

export default function EditPerfilScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Voltar"
        onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}