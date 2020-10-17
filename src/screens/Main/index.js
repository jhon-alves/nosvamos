import React from 'react';
import {
  Container,
  Header,
  Img,
  Description,
  Buttons,
  Btn,
  Info,
} from './styles';

export default function MainScreen({ navigation }) {
  return (
    <Container>
      <Header>
        <Img resizeMode="contain"
          source={require('../../images/logotipo.png')}
        />
        <Description>Nós Vamos Juntos chegar lá!</Description>
      </Header>

      <Buttons>
        <Btn onPress={() => navigation.navigate('Login')}>
          <Info>Entrar</Info>
        </Btn>
        <Btn onPress={() => navigation.navigate('Register')}>
          <Info>Cadastre-se</Info>
        </Btn>
      </Buttons>
    </Container>
  );
}