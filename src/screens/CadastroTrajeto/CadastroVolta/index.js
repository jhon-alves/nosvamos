import React from 'react';
import { Container, Header, AddressBox, ActionBox, Btn, Info, TitleActionBox, BtnAnexarImg, BtnGravarAudio, InfoUploud } from './styles';
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

        <ActionBox>
          <TitleActionBox>1º Ponto de ônibus</TitleActionBox>
          <BtnAnexarImg>
            <InfoUploud>Anexar Imagem</InfoUploud>
          </BtnAnexarImg>
          <BtnGravarAudio>
          <InfoUploud>Gravar Áudio</InfoUploud>
          </BtnGravarAudio>
        </ActionBox>

        <ActionBox>
          <TitleActionBox>Ônibus</TitleActionBox>
          <BtnAnexarImg>
            <InfoUploud>Anexar Imagem</InfoUploud>
          </BtnAnexarImg>
          <BtnGravarAudio>
          <InfoUploud>Gravar Áudio</InfoUploud>
          </BtnGravarAudio>
        </ActionBox>

        <ActionBox>
          <TitleActionBox>Descida do ônibus</TitleActionBox>
          <BtnAnexarImg>
            <InfoUploud>Anexar Imagem</InfoUploud>
          </BtnAnexarImg>
          <BtnGravarAudio>
          <InfoUploud>Gravar Áudio</InfoUploud>
          </BtnGravarAudio>
        </ActionBox>

        <ActionBox>
          <TitleActionBox>Chegada</TitleActionBox>
          <BtnAnexarImg>
            <InfoUploud>Anexar Imagem</InfoUploud>
          </BtnAnexarImg>
          <BtnGravarAudio>
          <InfoUploud>Gravar Áudio</InfoUploud>
          </BtnGravarAudio>
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
    fontWeight: 'bold',
  },
});