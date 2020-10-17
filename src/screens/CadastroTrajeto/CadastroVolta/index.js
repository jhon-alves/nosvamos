import React from 'react';
import { Container, Header, AddressBox, ActionBox, Btn, Info } from './styles';
import { TextInput, StyleSheet } from 'react-native';

export default function CadastroVolta({ navigation }) {
  return (
    <Container>
      <Header>
        <AddressBox>
          <TextInput
            style={styles.input}
            placeholder="Endereço origem"
          />
          <TextInput
            style={styles.input}
            placeholder="Endereço destino"
          />
        </AddressBox>

        <ActionBox>
          <TextInput
            style={styles.input}
            placeholder="Há quantos pontos de ônibus?"
          />
          <TextInput
            style={styles.input}
            placeholder="Nome do destino"
          />
        </ActionBox>

        <Btn onpress={() => navigation.navigate('CadastroVolta')}>
          <Info>Finalizar</Info>
        </Btn>
      </Header>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    padding: 15,
  },
});