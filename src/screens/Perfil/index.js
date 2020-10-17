import React from 'react';
import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Img,
  HeaderName,
  HeaderText,
  Label,
  AddLabel,
  Account,
  AccountTitle,
  Action,
  Actions,
  Description,
  Info
} from './styles';

import avatar from '../../images/avatar1.png';

export default function PerfilScreen({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderContainer>
            <Img source={avatar} resizeMode="contain" />
            <HeaderName>Jonatas Alves</HeaderName>
            <HeaderText>Responsável</HeaderText>
            <Label onPress={() => navigation.navigate('EditPerfil')}>
              <AddLabel>Editar perfil</AddLabel>
            </Label>
          </HeaderContainer>
        </Header>

        <Account>
          <AccountTitle></AccountTitle>

          <Action>
            <Actions>
              <Description>Meu número</Description>
              <Info>(11) 98250-8239</Info>
            </Actions>
            <Actions>
              <Description>CPF</Description>
              <Info>422.050.240-55</Info>
            </Actions>
            <Actions>
              <Description>CEP</Description>
              <Info>023-43023</Info>
            </Actions>
            <Actions>
              <Description>Endereço</Description>
              <Info>Rua Joaquim A...</Info>
            </Actions>
            <Actions>
              <Description>Cidade</Description>
              <Info>São Paulo</Info>
            </Actions>
            <Actions>
              <Description>UF</Description>
              <Info>SP</Info>
            </Actions>
            <Actions>
              <Description>Política de privacidade</Description>
            </Actions>
            <Actions>
              <Description>Sair</Description>
            </Actions>
          </Action>
        </Account>

      </Container>
    </Wrapper>
  );
}