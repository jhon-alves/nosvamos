import React from 'react';
import {
  Wrapper,
  Container,
  Action,
  ActionButton,
  Modal,
  ModalAlert,
  ModalDescription,
  ModalTeste
} from './styles';

export default function TrajetosScreen({ navigation }) {
  return (
    <Wrapper>
      <Container>

        <ModalTeste>
          <Modal>
            <ModalAlert>Aviso</ModalAlert>
            <ModalDescription>Nenhuma rota cadastrada</ModalDescription>
          </Modal>
        </ModalTeste>

        <Action onPress={() => navigation.navigate('CadastroTrajeto')}>
          <ActionButton>Adicionar Trajeto</ActionButton>
        </Action>
      </Container>
    </Wrapper>
  );
}