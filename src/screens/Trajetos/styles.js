import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #f7f7fa;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const ModalTeste = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;

export const Modal = styled.View`
  background: #2a2e43;
  height: 150px;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
`;
export const ModalAlert = styled.Text`
  color: #f1f1f1;
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0;
`;
export const ModalDescription = styled.Text`
  color: #f1f1f1;
  font-size: 18px;
`;

export const Action = styled.TouchableOpacity`
  align-items: center;
`;

export const ActionButton = styled.Text`
  background: #e64783;
  color: #fff;
  font-size: 15px;
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
`;
